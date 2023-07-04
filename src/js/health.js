import { Actor, Vector, SpriteSheet } from "excalibur";
import { Resources } from './resources.js'

export class Health extends Actor {
    spritedsheet
    health = 3

    constructor(){
        super()
    }

    onInitialize() {
        this.spritedsheet = SpriteSheet.fromImageSource({
            image: Resources.Health,
            grid: {
                rows: 4,
                columns: 1,
                spriteWidth: 432,
                spriteHeight: 144,
            }
        }) 
        this.pos = new Vector (1090, 60)
        this.scale = new Vector (0.8, 0.8)
        this.graphics.use(this.spritedsheet.getSprite(0, 0))
    }

    reduceHealth(healtReduction) {
        this.health -= healtReduction
        this.graphics.use(this.spritedsheet.getSprite(0, 3 - this.health))
        if (this.health <= 0) {
            this.scene.engine.goToScene('over');
        }
    }
}