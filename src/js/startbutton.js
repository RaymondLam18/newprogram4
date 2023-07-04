import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";

export class StartButton extends Actor{

    constructor(){
        super({width: Resources.Start.width, height: Resources.Start.height})
    }

    onInitialize(engine){
        this.graphics.use(Resources.Start.toSprite())
        this.pos = new Vector(650,325)
        this.scale = new Vector(5, 5)
        this.on('pointerup', (event) => {
            engine.goToScene('play')
        })
    }
}