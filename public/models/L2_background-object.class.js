"use strict";
class BackgroundObject extends MovableObject {
    width = canvasWidth;
    height = canvasHeight;
    constructor(imgPath, x) {
        super();
        this.loadImage(imgPath);
        this.x = x;
        this.y = canvasHeight - this.height;
    }
}
