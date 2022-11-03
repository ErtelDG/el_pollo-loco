"use strict";
class DrawableObject {
    ctx;
    img;
    imageCache = [];
    imageCacheJump = [];
    imageCacheDead = [];
    imageCacheHeart = [];
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
    loadImagesJump(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheJump.push(img);
        });
    }
    loadImagesDead(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheDead.push(img);
        });
    }
    loadImagesHurt(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheHeart.push(img);
        });
    }
    // loadImagesImagesStatusbarHp(arr: any[]) {
    //    arr.forEach((path: string) => {
    //       let img = new Image();
    //       img.src = path;
    //       this.imageCacheImagesStatusbarHp.push(img);
    //    });
    // }
    drawRectangle(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.lineWidth = "5";
        this.ctx.strokeStyle = "blue";
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
    }
    drawImage(objectToDraw) {
        if (this.ctx != null) {
            this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
            this.drawRectangle(objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
        }
    }
}
