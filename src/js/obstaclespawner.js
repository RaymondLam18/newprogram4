import { Actor } from "excalibur";
import { Obstacle } from "./obstacle.js";

export class ObstacleSpawner extends Actor {
    player;
    engine;
    spawnTimer = 0;
    spawnInterval = 1000; // Spawn a new obstacle every 1.5 seconds

    constructor(player, engine) {
        super();
        this.player = player;
        this.engine = engine;
    }

    update(engine, delta) {
        super.update(engine, delta);

        this.spawnTimer += delta;

        if (this.spawnTimer >= this.spawnInterval) {
            this.spawnObstacle();
            this.spawnTimer -= this.spawnInterval;
        }
    }

    spawnObstacle() {
        const obstacle = new Obstacle(this.player, this.engine);
        this.scene.add(obstacle);
    }
}
