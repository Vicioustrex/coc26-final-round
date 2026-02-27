/**
 * Returns a 4-char adjacency key for autotiling.
 * Checks top, right, bottom, left — matching only the same character.
 *
 * @param {string[]} bitmap
 * @param {number} row
 * @param {number} col
 * @param {string} ch
 * @returns {string}
 */
function computeAdjacency(bitmap, row, col, ch) {
    const top = bitmap[row - 1]?.[col] === ch ? 'y' : 'n';
    const right = bitmap[row]?.[col + 1] === ch ? 'y' : 'n';
    const bottom = bitmap[row + 1]?.[col] === ch ? 'y' : 'n';
    const left = bitmap[row]?.[col - 1] === ch ? 'y' : 'n';
    return top + right + bottom + left;
}

/** 
 * Builds a texturer that reads obj.tileKey to pick the right autotile variant
 * Falls back to yyyy if the key is missing from the tileset.
 *
 * @param {Object} tileset - like gfx.tiles.A
 * @returns {(t, obj) => SpriteRef}
 */
function makeAutoTexturer(tileset) {
    return (t, obj) => tileset[obj.tileKey] ?? tileset.yyyy;
}


const roomTemplates = {

    A: [
        "####################",
        "#                  #",
        "#                  #",
        "#     ##            ",
        "#                  #",
        "#        ###       #",
        "#                  #",
        "#   ###            #",
        "#                  #",
        "#                  #",
        "#              ##  #",
        "#                  #",
        "#  ###             #",
        "#                  #",
        "#                  #",
        "#------            #",
        "####################",
    ],

    B: [
        "####################",
        "                   #",
        "#                  #",
        "#         ###      #",
        "#                  #",
        "#    ##            #",
        "#                  #",
        "#              ##  #",
        "#                  #",
        "#   ####           #",
        "#                  #",
        "#                  #",
        "#        ##        #",
        "#                  #",
        "#                  #",
        "#             -----#",
        "####################",
    ],

    C: [
        "####################",
        "#                  #",
        "#   ##             #",
        "#                  #",
        "#          ###      ",
        "#                  #",
        "#     ###          #",
        "#                  #",
        "#                   ",
        "#              ##  #",
        "#                  #",
        "#  ##              #",
        "#                  #",
        "#                  #",
        "#---               #",
        "#                  #",
        "####################",
    ],

    D: [
        "####################",
        "#                   ",
        "#                  #",
        "#        ##        #",
        "#                  #",
        "#  ##              #",
        "#                  #",
        "#           ###    #",
        "#                  #",
        "#    ##            #",
        "#                  #",
        "#              ##  #",
        "#                  #",
        "#                  #",
        "#       ----       #",
        "#                  #",
        "####################",
    ],

};

/**
 * World assembly grid
 * */
const worldAssembly = [
    ["A", "B"],
    ["C", "D"],
];


/**
 * AutoTiler
 * Knows which bitmap characters map to which tilesets,
 * computes TRBL adjacency keys, and builds WorldBuilder registries.
 */
class AutoTiler {
    /**
     * @param {Object.<string, { tileset: Object, matchChar?: string }>} tilemap
     *   tileset   – the compiled gfx.tiles.X object (SpriteRef variants keyed by adjacency)
     */
    constructor(tilemap) {
        this.tilemap = tilemap;
    }

    /**
     * Returns a 4-char adjacency key for the tile at [row, col] in bitmap.
     *   'y' = same-type tile present on that side
     *   'n' = no same-type tile 
     *
     * @param {string[]} bitmap
     * @param {number}   row
     * @param {number}   col
     * @param {string}   ch - character whose adjacency to check
     * @returns {string}  e.g. "yyyy" | "nnnn" | "nyny"
     */
    static adjacencyKey(bitmap, row, col, ch) {
        const top    = bitmap[row - 1]?.[col] === ch ? 'y' : 'n';
        const right  = bitmap[row]?.[col + 1] === ch ? 'y' : 'n';
        const bottom = bitmap[row + 1]?.[col] === ch ? 'y' : 'n';
        const left   = bitmap[row]?.[col - 1] === ch ? 'y' : 'n';
        return `${top}${right}${bottom}${left}`;
    }

    /**
     * Returns a texturer function for the given bitmap char.
     * The texturer reads obj.tileKey (stamped during build()) to pick the variant.
     *
     * @param {string} ch
     * @returns {(t: number, obj: MObject) => SpriteRef}
     */
    texturerFor(ch) {
        const cfg = this.tilemap[ch];
        if (!cfg) throw new Error(`AutoTiler: no tileset registered for "${ch}"`);
        return (t, obj) => cfg.tileset[obj.tileKey] ?? cfg.tileset.yyyy;
    }

    /**
     * Stamps the precomputed adjacency key onto a world object so its texturer
     * can select the correct sprite variant each frame.
     * Called internally by WorldBuilder.build().
     */
    stamp(bitmap, row, col, ch, obj) {
        const matchCh = this.tilemap[ch]?.matchChar ?? ch;
        obj.tileKey   = AutoTiler.adjacencyKey(bitmap, row, col, matchCh);
    }

    /**
     * Builds a tile registry suitable for passing into WorldBuilder.
     *
     * @param {Object.<string, { type: Function, layer?: number, texturer?: Function }>} charConfig
     *   For chars registered in this.tilemap:  only `type` (+ optional `layer`) needed.
     * @returns {Object} registry
     */
    buildRegistry(charConfig) {
        const registry = {};
        for (const [ch, cfg] of Object.entries(charConfig)) {
            const isAuto = !!this.tilemap[ch];
            registry[ch] = {
                type:     cfg.type,
                autotile: isAuto,
                texturer: isAuto ? this.texturerFor(ch) : cfg.texturer,
                layer:    cfg.layer ?? 0,
            };
        }
        return registry;
    }
}

class WorldBuilder {
    /**
     * @param {MEngine}  engine
     * @param {number}     [blockSize=1]
     * @param {Object}     [tileRegistry={}]  - from AutoTiler.buildRegistry() or hand-built
     * @param {AutoTiler}  [autoTiler=null]   - needed only when registry has autotile entries
     */
    constructor(engine, blockSize = 1, tileRegistry = {}, autoTiler = null) {
        this.engine       = engine;
        this.blockSize    = blockSize;
        this.tileRegistry = tileRegistry;
        this.autoTiler    = autoTiler;
    }

    /**
     * Parses a bitmap, wipes the world (keeping the player), and populates
     * engine.world with the appropriate typed objects.
     *
     * @param {string[]} bitmap
     * @returns {{ widthUnits: number, heightUnits: number }}
     */
    build(bitmap) {
        const { engine, blockSize, tileRegistry, autoTiler } = this;

        //wipe world, preserving the player on layer 1
        const player          = engine.player;
        engine.world.zia      = {};
        engine.world.indices  = [];
        if (player) engine.world.add(player, 1);

        let maxCols = 0;

        for (let row = 0; row < bitmap.length; row++) {
            const line = bitmap[row];
            for (let col = 0; col < line.length; col++) {
                const ch    = line[col];
                const entry = tileRegistry[ch];
                if (!entry) continue;

                const x   = col * blockSize;
                const y   = row * blockSize;
                const obj = new entry.type(x, y, blockSize, blockSize, entry.texturer);

                if (entry.autotile && autoTiler) {
                    autoTiler.stamp(bitmap, row, col, ch, obj);
                }

                engine.world.add(obj, entry.layer ?? 0);
            }
            if (line.length > maxCols) maxCols = line.length;
        }

        return {
            widthUnits:  maxCols       * blockSize,
            heightUnits: bitmap.length * blockSize,
        };
    }
}

class WorldManager {
    /**
     * @param {MEngine} engine
     * @param {Object} roomTemplates
     * @param {string[][]} worldAssembly - 2-D grid of room keys
     * @param {WorldBuilder} builder
     */
    constructor(engine, roomTemplates, worldAssembly, builder) {
        this.engine = engine;
        this.templates = roomTemplates;
        this.assembly = worldAssembly;
        this.builder = builder;

        //current position in the assembly grid
        this.curRow = 0;
        this.curCol = 0;

        //dimensions of the currently loaded room (world units)
        this.roomW = 0;
        this.roomH = 0;

        //internal transition flags
        this._pending = null; //{ dir:'left'|'right'|'top'|'bottom' }
    }

    /** Returns the room key at a given assembly position, or null. */
    getRoomKey(row, col) {
        if (row < 0 || row >= this.assembly.length) return null;
        if (col < 0 || col >= this.assembly[row].length) return null;
        return this.assembly[row][col] || null;
    }

    get leftKey() {
        return this.getRoomKey(this.curRow, this.curCol - 1);
    }
    get rightKey() {
        return this.getRoomKey(this.curRow, this.curCol + 1);
    }
    get topKey() {
        return this.getRoomKey(this.curRow - 1, this.curCol);
    }
    get bottomKey() {
        return this.getRoomKey(this.curRow + 1, this.curCol);
    }

    /**
     * Loads the room at the given assembly position.
     * @param {number} row
     * @param {number} col
     */
    loadRoom(row, col) {
        const key = this.getRoomKey(row, col);
        if (!key) {
            //console.warn(`WorldManager: no room at [${row}, ${col}]`);
            return;
        }
        const bitmap = this.templates[key];
        if (!bitmap) {
            //console.warn(`WorldManager: unknown room key "${key}"`);
            return;
        }

        this.curRow = row;
        this.curCol = col;

        const {
            widthUnits,
            heightUnits
        } = this.builder.build(bitmap);
        this.roomW = widthUnits;
        this.roomH = heightUnits;
    }

    /**
     * Sets the player's starting position after loading a room.
     * @param {MPlayer} player
     * @param {number} x  - world-unit x
     * @param {number} y  - world-unit y
     */
    placePlayer(player, x, y) {
        player.x = x;
        player.y = y;
        player.xv = 0;
        player.yv = 0;
        player.updateHitbox?.();
    }
    /**
     * Call once per frame. Checks whether the player has walked
     * off an edge, queues a transition, then executes it.
     *
     * @param {MPlayer} player
     */
    execute(player) {
        if (!this._pending) {
            this._detectEdge(player);
        }

        if (this._pending) {
            this._doTransition(player);
            this._pending = null;
        }
    }

    /** Checks all four edges and flags the first one hit. */
    _detectEdge(player) {
        const {
            roomW,
            roomH
        } = this;

        if (player.x + player.w < 0 && this.leftKey) {
            this._pending = {
                dir: 'left'
            };
            return;
        }
        if (player.x > roomW && this.rightKey) {
            this._pending = {
                dir: 'right'
            };
            return;
        }
        if (player.y + player.h < 0 && this.topKey) {
            this._pending = {
                dir: 'top'
            };
            return;
        }
        if (player.y > roomH && this.bottomKey) {
            this._pending = {
                dir: 'bottom'
            };
            return;
        }
    }

    /** Loads the adjacent room and repositions the player at the matching edge. */
    _doTransition(player) {
        // save player position relative to the current room so we can
        // carry the axis that doesn't change through the doorway
        const savedX = player.x;
        const savedY = player.y;

        switch (this._pending.dir) {
            case 'left': {
                this.loadRoom(this.curRow, this.curCol - 1);
                this.placePlayer(player,
                    this.roomW - player.w,
                    savedY
                );
                break;
            }
            case 'right': {
                this.loadRoom(this.curRow, this.curCol + 1);
                this.placePlayer(player,
                    0,
                    savedY
                );
                break;
            }
            case 'top': {
                this.loadRoom(this.curRow - 1, this.curCol);
                this.placePlayer(player,
                    savedX,
                    this.roomH - player.h
                );
                break;
            }
            case 'bottom': {
                this.loadRoom(this.curRow + 1, this.curCol);
                this.placePlayer(player,
                    savedX,
                    0
                );
                break;
            }
        }
    }
}