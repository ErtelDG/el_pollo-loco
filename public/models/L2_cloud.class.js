"use strict";
class Cloud extends MovableObject {
    y = 10;
    width = canvasWidth;
    height = 250;
    constructor(imgPath) {
        super();
        this.loadImage(imgPath);
        this.x = Math.random() * 500; //Zahl zwischen 200 und 700
        this.moveCloud();
    }
    moveCloud() {
        this.moveLeft();
    }
}
