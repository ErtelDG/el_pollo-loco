"use strict";
class DrawableObject {
    ctx;
    img;
    imageCache = [];
    imageCacheImagesStatusbarHp = [];
    currentImage = 0;
    x = 120;
    y = 230;
    height = 150;
    width = 100;
    constructor() { }
    // loadImage ('img/test.png')
    loadImage(path) {
        this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    draw(objectToDraw) {
        if (this.ctx != null) {
            this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
        }
    }
    drawRectangle(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.lineWidth = "5";
        this.ctx.strokeStyle = "blue";
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
    }
    /**
     *     *
     * @param {Array} arr - ['img/image1.png','img/image2.png',....]
     */
    loadImagesWalking(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
        });
    }
}
