"use strict";
class DrawableObject {
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
    loadImagesImagesStatusbarHp(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheImagesStatusbarHp.push(img);
        });
    }
}
