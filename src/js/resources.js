import { ImageSource, Loader, Color } from 'excalibur'
import backImage from '../images/MIT-3q-FirstLight-01-press.jpg'
import player from '../images/player-pixilart.png'
import stone from '../images/star.png'
import health from '../images/health.png'
import over from '../images/GameOver.png'

const Resources = {
    Back: new ImageSource(backImage),
    Player: new ImageSource(player),
    Stone: new ImageSource(stone),
    Health: new ImageSource(health),
    Over: new ImageSource(over)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }

ResourceLoader.backgroundColor = Color.Grey