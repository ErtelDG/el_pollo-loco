"use strict";
class ThrowableObject extends MovableObject {
    IMAGES_ARRAY = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    imagesRotationBottle = [];
    constructor(characterX, characterY) {
        super();
        this.x = characterX;
        this.y = characterY;
        this.height = 60;
        this.width = 50;
        this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGES_ARRAY);
        this.throw(this.x, this.y);
        this.animate();
    }
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesRotationBottle.push(img);
        });
    }
    animate() {
        setInterval(() => {
            this.animationObjects(this.IMAGES_ARRAY, this.imagesRotationBottle);
        }, 120);
    }
}
