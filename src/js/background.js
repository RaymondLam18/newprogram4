import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    offset
    
    onInitialize(){
        const BackImage = Resources.Back.toSprite()
        this.offset = BackImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: BackImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: BackImage,
                    pos: new Vector(BackImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)       
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate() {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}