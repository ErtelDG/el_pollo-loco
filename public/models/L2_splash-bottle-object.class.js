"use strict";
class SplashBottleObject extends MovableObject {
    IMAGES_ARRAY = [
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];
    imagesSplashBottle = [];
    constructor(splashPositionX, splashPositionY) {
        super();
        this.x = splashPositionX;
        this.y = splashPositionY;
        this.height = 60;
        this.width = 50;
        this.loadImage("img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png");
        this.loadImages(this.IMAGES_ARRAY);
        this.animate();
    }
    /**
     * function to load all splash bottle img in array for img path to load later
     *
     * @param arr => array with all splash bottle imgs
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesSplashBottle.push(img);
        });
    }
    /**
     * function to animate the object
     */
    animate() {
        setInterval(() => {
            this.animationObjects(this.IMAGES_ARRAY, this.imagesSplashBottle);
        }, 120);
    }
}
