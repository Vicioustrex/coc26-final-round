class Transform {
  constructor(x, y, theta) {
    this.x = x;
    this.y = y;
    this.theta = theta;
  }

  getPos() {
    return [this.x, this.y];
  }
  getAngle() {
    return this.theta;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
    return [this.x, this.y];
  }
  setAngle(theta) {
    return this.theta;
  }
}

class Shape {}

class Rectangle extends Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

class Circle extends Shape {
  constructor(r) {
    this.r = r;
  }
}

class Polygon extends Shape {
  constructor(...vertices) {
    if (vertices.length < 3)
      throw new Error("Polygon needs at least three vertices");

    this.vertices = vertices;
  }
}

/*
Useful matter body configuration:

angle
collisionFilter
  - category
  - group
  - mask
friction (0-1)
frictionAir
frictionStatic
id (readonly)
isSensor
isStatic
label
mass
parent
position
restitution
vertices

*/

class Body {
  constructor() {
    this.matterBodyHandle = null;
  }

  getMatterBody() {
    return this.matterBodyHandle;
  }
  setMatterBody(matterBody) {
    this.matterBodyHandle = matterBody;
  }
}

class Sensor extends Body {
  constructor() {
    super();
    this.options = { isSensor: true };
  }
}

class StaticBody extends Body {
  constructor(options) {
    super();
    this.options = options;
    options.isStatic = true;
  }
}

class DynamicBody extends Body {
  constructor(options) {
    super();
    this.options = options;
  }
}

class System {
  constructor(...requiredComponents) {
    this.requiredComponents = requiredComponents;
  }
  applyTo(gameObject) {}
  update() {}

  apply() {
    for (let gameObject of gameObjects) {
      let isMissingComponent = false;
      for (let requiredComponent of this.requiredComponents) {
        if (
          !gameObject.components.includes(
            (component) => component instanceof requiredComponent,
          )
        ) {
          isMissingComponent = true;
          break;
        }
      }

      if (isMissingComponent) {
        continue;
      } else {
        this.applyToOne(gameObject);
      }
    }
    this.update();
  }
}

class PhysicsSystem extends System {
  constructor() {
    super();
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;
  }
  applyTo(gameObject) {}
  update() {}
}

class Sprite {}

class AnimatedSprite {}

let gameObjects = [];
let idCounter = 0;

class GameObject {
  constructor(...components) {
    gameObjects.push(this);

    this.id = idCounter++;
    this.components = components;
  }

  addComponent(componentInstance) {
    this.components.push(componentInstance);
  }
  removeComponent(componentClass) {
    // Find the instance of the component
    let index = this.components.findIndex(
      (componentInstance) => componentInstance instanceof componentClass,
    );

    // Swap and pop
    this.components[index] = this.components[this.components.length - 1];
    this.components.pop();
  }
  findComponent(componentClass) {
    return this.components.find(
      (component) => component instanceof componentClass,
    );
  }

  destroySelf() {
    // Find the index of the game object
    let index = gameObjects.indexOf(this);

    // Swap and pop
    gameObjects[index] = gameObjects[gameObjects.length - 1];
    gameObjects.pop();
  }
}

/*

GameObjects are the nodes.

Components include:
- Transform
- Shape
- Sensor
- Static Physics Body
- Dynamic Physics Body
- Sprite
- AnimatedSprite
- Signal
- StateMachine

*/
