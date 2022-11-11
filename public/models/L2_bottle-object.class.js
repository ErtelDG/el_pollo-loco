"use strict";
class Bottle extends MovableObject {
    IMAGES = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png", "img/6_salsa_bottle/2_salsa_bottle_on_ground.png"];
    blob_sound = new Audio("audio/blob.mp3");
    randomNumber = 0;
    constructor() {
        super();
        this.x = 250 + Math.random() * 5000;
        this.y = 320;
        this.height = 60;
        this.width = 50;
        this.randomNumber = (Math.random() * 1).toFixed(0);
        this.loadImagesBottles(this.IMAGES);
        this.loadImage(this.IMAGES[this.randomNumber]);
    }
    /**
     * function to load all bottle img in array for img path to load later
     *
     * @param arr => array with all bottle imgs
     */
    loadImagesBottles(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
        });
    }
}
