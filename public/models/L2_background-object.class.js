"use strict";
class BackgroundObject extends MovableObject {
    width = 720;
    height = 400;
    constructor(imgPath, x) {
        super();
        this.loadImage(imgPath);
        this.x = x;
        this.y = this.height - this.height;
    }
}
