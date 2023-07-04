import { Engine } from 'excalibur'
import { ResourceLoader } from './resources'
import { PlayGame } from './scene';
import { GameOver } from "./gameover.js";

export class Game extends Engine {


    constructor() {
        super({ width: 1300, height: 650 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.addScene('play', new PlayGame())
        this.addScene('over', new GameOver())

        this.goToScene('play')
    }
}

new Game()