import { Scene, Vector, Label, TextAlign } from "excalibur";
import { Background } from './background.js';
import { Player } from './player.js';
import { Health } from "./health.js";
import { ObstacleSpawner } from "./obstaclespawner.js";

export class PlayGame extends Scene {
  score = 0;
  scoreLabel;
  scoreTimer = 0;
  obstacleSpawner;

  constructor() {
    super({ width: 1300, height: 650 });
  }

  onInitialize() {
    const background = new Background();
    this.add(background);

    const health = new Health();
    this.add(health);

    const player = new Player(health);
    this.add(player);

    const obstaclespawner = new ObstacleSpawner(player, this.engine);
    this.add(obstaclespawner)

    // Create the score label
    this.scoreLabel = new Label({
      text: `Score: ${this.score}`,
      pos: new Vector(10, 10),
      textAlign: TextAlign.Left,
      fontSize: 20,
      color: 'white'
    });
    this.add(this.scoreLabel);
  }

  onPostUpdate(engine, delta) {
    this.scoreTimer += delta;
    if (this.scoreTimer >= 1000) {
      const scoreIncrease = Math.floor(this.scoreTimer / 1000);
      this.score += scoreIncrease;
      this.scoreLabel.text = `Score: ${this.score}`;
      this.scoreTimer -= scoreIncrease * 1000;
    }
  }
}
