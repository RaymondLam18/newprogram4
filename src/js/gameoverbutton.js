import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";

export class OverButton extends Actor{

    constructor(){
        super({width: Resources.Over.width, height: Resources.Over.height})
    }

    onInitialize(engine){
        this.graphics.use(Resources.Over.toSprite())
        this.pos = new Vector(650,325)
        this.scale = new Vector(3, 3)
        this.on('pointerup', (event) => {
            engine.goToScene('play')
        })
    }
}