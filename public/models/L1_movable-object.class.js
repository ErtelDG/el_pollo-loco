"use strict";
class MovableObject {
    constructor() { }
    x = 120;
    y = 230;
    img;
    height = 150;
    width = 100;
    imageCache = [];
    imageCacheJump = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 50);
    }
    isAboveGround() {
        return this.y < 150;
    }
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
    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    animationObjects(images, Cach) {
        let i = this.currentImage % images.length;
        this.img = Cach[i];
        this.currentImage++;
    }
    jump() {
        this.speedY = 30;
    }
}
