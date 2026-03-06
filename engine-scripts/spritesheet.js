/** Sprite reference, from spritesheet.
 *
 */
class SpriteRef {
  /** Constructs an instance of SpriteRef.
   *
   * @constructor
   * @param {CanvsaImageSource} spritesheet
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   */
  constructor(spritesheet, x, y, w, h) {
    this.spritesheet = spritesheet;
    // SOURCE, NOT DESTINATION COORDINATES!
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  /** Draws the sprite reference onto a canvas.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {number} pixel - pixel size
   * @returns {void}
   */
  draw(ctx, x, y, pixel, flip = 1) {
    // this.x, etc is source coordinates
    // x, y, etc is destination coordinates
    ctx.save();
    ctx.imageSmoothingEnabled = false;
    if (flip === -1) {
      //mirror around the sprite's center
      ctx.translate(x + this.w * pixel, 0);
      ctx.scale(-1, 1);
      x = 0;
    }
    ctx.drawImage(
      this.spritesheet,
      this.x,
      this.y,
      this.w,
      this.h,
      x,
      y,
      this.w * pixel,
      this.h * pixel,
    );
    ctx.restore();
  }
}

/** Spritesheet, containing all sprites.
 *
 */
class Spritesheet {
  /** Constructs an instance of Spritesheet.
   *
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.w = width;
    this.h = height;
    this.ctx = this.canvas.getContext("2d");
    // tracking variables so sprites don't overlap
    this.penX = 0;
    this.penY = 0;
    this.nextY = 0;
  }

  /** INTERNAL: Stores a single sprite into an imageData.
   *
   * @param {ImageData} imageData
   * @param {number[][]} palette
   * @param {string[]} sprite
   * @returns {SpriteRef}
   */
  #internalStoreImageData(imageData, palette, sprite) {
    const spriteH = sprite.length;
    const spriteW = Math.max(...sprite.map((row) => row.length));
    if (spriteW > this.w) {
      throw "Error: spritesheet is too small for image to fit!";
    }
    let endX = this.penX + spriteW,
      endY;
    if (endX > this.w) {
      this.penX = 0;
      this.penY = this.nextY;
      endX = this.penX + spriteW;
    }
    endY = this.penY + spriteH;
    if (endY > this.h) {
      throw "Error: spritesheet is too small for image to fit!";
    }
    const spriteRef = new SpriteRef(
      this.canvas,
      this.penX,
      this.penY,
      spriteW,
      spriteH,
    );
    for (let y = this.penY; y < endY; y++) {
      for (let x = this.penX; x < endX; x++) {
        // imageData.data is a 1-dimensional array
        // 4 values for each pixel, r g b a
        // this gets the location of the pixel in the data
        // << 2 is a fancy way of multiplying by 4
        const n = (y * this.w + x) * 4;
        const c = palette?.[sprite[y - this.penY]?.[x - this.penX]];
        if (c) {
          imageData.data[n + 0] = c[0];
          imageData.data[n + 1] = c[1];
          imageData.data[n + 2] = c[2];
          imageData.data[n + 3] = c[3];
        }
      }
    }
    this.penX = endX;
    if (endY > this.nextY) this.nextY = endY;
    return spriteRef;
  }

  /** INTERNAL: Stores a bunch of sprites in the spritesheet at once. It is more
   * efficient to store many at once than many in many calls.
   *
   * @param {number[][]} palette
   * @param {Object} sprites
   * @returns {Object|SpriteRef[]|SpriteRef}
   */
  #internalStoreMultipleImageData(imageData, palette, sprites) {
    if (Array.isArray(sprites) && typeof sprites[0] === "string") {
      // we've hit a sprite, and now, we can store image data
      // (sprites is singular here lol)
      return this.#internalStoreImageData(imageData, palette, sprites);
    } else if (Array.isArray(sprites)) {
      const spriteRefs = [];
      for (const sprite of sprites) {
        spriteRefs.push(
          this.#internalStoreMultipleImageData(imageData, palette, sprite),
        );
      }
      return spriteRefs;
    } else {
      const spriteRefs = {};
      for (const i in sprites) {
        spriteRefs[i] = this.#internalStoreMultipleImageData(
          imageData,
          palette,
          sprites[i],
        );
      }
      return spriteRefs;
    }
  }

  /** Stores a bunch of sprites in the spritesheet at once. It is more
   * efficient to store many at once than many in many calls.
   *
   * @param {number[][]} palette
   * @param {Object} sprites
   * @returns {Object}
   */
  store(palette, sprites) {
    const imageData = this.ctx.getImageData(0, 0, this.w, this.h);
    const spriteRefs = this.#internalStoreMultipleImageData(
      imageData,
      palette,
      sprites,
    );
    this.ctx.putImageData(imageData, 0, 0);
    return spriteRefs;
  }
}

function generateAutoTileset(interior, seam = ".", corner = "-") {
  const variants = {};
  for (const N of ["y", "n"])
    for (const E of ["y", "n"])
      for (const S of ["y", "n"])
        for (const W of ["y", "n"]) {
          const neOpts = N === "n" && E === "n" ? ["y", "n"] : ["y"];
          const seOpts = S === "n" && E === "n" ? ["y", "n"] : ["y"];
          const swOpts = S === "n" && W === "n" ? ["y", "n"] : ["y"];
          const nwOpts = N === "n" && W === "n" ? ["y", "n"] : ["y"];

          for (const NE of neOpts)
            for (const SE of seOpts)
              for (const SW of swOpts)
                for (const NW of nwOpts) {
                  const key = N + NE + E + SE + S + SW + W + NW;
                  const rows = interior.map((r) => r.split(""));
                  const H = rows.length,
                    Ww = rows[0].length;

                  if (N === "n") for (let c = 0; c < Ww; c++) rows[0][c] = seam;
                  if (S === "n")
                    for (let c = 0; c < Ww; c++) rows[H - 1][c] = seam;
                  if (E === "n")
                    for (let r = 0; r < H; r++) rows[r][Ww - 1] = seam;
                  if (W === "n") for (let r = 0; r < H; r++) rows[r][0] = seam;
                  if (N === "n" && W === "n")
                    rows[0][0] = NW === "n" ? corner : seam;
                  if (N === "n" && E === "n")
                    rows[0][Ww - 1] = NE === "n" ? corner : seam;
                  if (S === "n" && W === "n")
                    rows[H - 1][0] = SW === "n" ? corner : seam;
                  if (S === "n" && E === "n")
                    rows[H - 1][Ww - 1] = SE === "n" ? corner : seam;

                  variants[key] = rows.map((r) => r.join(""));
                }
        }
  return variants;
}
