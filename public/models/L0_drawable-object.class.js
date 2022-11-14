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
    offset = { top: 0, left: 0, right: 0, bottom: 0 };
    constructor() { }
    // loadImage ('img/test.png')
    loadImage(path) {
        this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    /**
     * function to load alking img
     *
     * @param {Array} arr - ['img/image1.png','img/image2.png',....]
     */
    loadImagesWalking(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
        });
    }
    /**
     * function to load statusbar img
     *
     * @param arr => array with img for the statusbar
     */
    loadImagesImagesStatusbarHp(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheImagesStatusbarHp.push(img);
        });
    }
    /**
     *function to load the correct img to percentage
     *
     * @param percentage => persentage as number
     *
     * @returns matching picture to the percentage
     */
    resolveImageIndex(percentage) {
        if (percentage == 100) {
            return 5;
        }
        else if (percentage >= 80) {
            return 4;
        }
        else if (percentage >= 60) {
            return 3;
        }
        else if (percentage >= 40) {
            return 2;
        }
        else if (percentage >= 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
