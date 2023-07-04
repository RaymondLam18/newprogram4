import { Actor,Vector } from "excalibur";
import { Resources } from './resources.js';

export class Obstacle extends Actor {
    player;
    engine;
    velocity = 200; // Adjust this value to change the obstacle's speed

    constructor(player, engine) {
        super({ width: Resources.Stone.width, height: Resources.Stone.height });
        this.player = player;
        this.engine = engine;
    }

    onInitialize() {
        this.graphics.use(Resources.Stone.toSprite());
        this.on("collisionstart", (event) => { this.onCollision(event); });
        this.scale = new Vector(3, 3);
        this.pos = new Vector(this.engine.drawWidth, Math.random() * this.engine.drawHeight);
        this.angularVelocity = (Math.random() * 10) - 5;
    }

    onCollision(event) {
        if (event.other === this.player) {
            this.player.health.reduceHealth(1);
            this.kill();
        }
    }

    update(engine, delta) {
        super.update(engine, delta);

        this.pos.x -= this.velocity * delta / 1000; // Adjust the obstacle's speed by multiplying the velocity by delta

        // If obstacle moves off the left edge, kill it
        if (this.pos.x + this.width < 0) {
            this.kill();
        }
    }
}
