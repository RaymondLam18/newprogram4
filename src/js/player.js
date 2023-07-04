import { Actor, Vector, Input } from "excalibur";
import { Resources } from './resources.js'

export class Player extends Actor {
    health

  constructor(health) {
    super({ width: Resources.Player.width, height: Resources.Player.height });
    this.health = health
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Player.toSprite());
    this.scale = new Vector(4, 4);
    this.pos = new Vector(200, 300);

  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.isHeld(Input.Keys.W)) {
      if (this.pos.y > 50) {
        this.vel.y = -400;
      } else {
        this.vel.y = 0;
      }
    }
    if (engine.input.keyboard.isHeld(Input.Keys.S)) {
      if (this.pos.y < 600) {
        this.vel.y = 400;
      } else {
        this.vel.y = 0;
      }
    }
    engine.input.keyboard.on("release", (evt) => {
      if (evt.key === Input.Keys.W || evt.key === Input.Keys.S) {
        this.vel.y = 0;
      }
    });
  }
}
