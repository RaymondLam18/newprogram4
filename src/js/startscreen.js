import { Scene } from "excalibur";
import { Background } from './background.js';
import { StartButton } from "./startbutton.js";

export class Start extends Scene {
    startbutton
    constructor() {
        super()
    }

    onInitialize() {
        const background = new Background();
        this.add(background);

        this.startbutton = new StartButton();
        this.startbutton.enableCapturePointer = true;
        this.add(this.startbutton);
    }
}