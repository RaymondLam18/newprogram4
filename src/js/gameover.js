import { Scene } from "excalibur";
import { Background } from './background.js';
import { OverButton } from "./gameoverbutton.js";

export class GameOver extends Scene {
    overbutton
    constructor() {
        super()
    }

    onInitialize() {
        const background = new Background();
        this.add(background);

        this.overbutton = new OverButton();
        this.overbutton.enableCapturePointer = true;
        this.add(this.overbutton);
    }
}