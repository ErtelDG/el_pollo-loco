"use strict";
class MovableObject {
    constructor() { }
    x = 120;
    y = 230;
    img;
    height = 150;
    width = 100;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    // loadImage ('img/test.png')
    loadImage(path) {
        this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    /**
     *     *
     * @param {Array} arr - ['img/image1.png','img/image2.png',....]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
        });
    }
    moveRight() {
        console.log("moveRight");
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
    animationEnemiesWalking(images) {
        let i = this.currentImage % images.length;
        this.img = this.imageCache[i];
        this.currentImage++;
    }
}
