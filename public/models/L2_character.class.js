"use strict";
class Character extends MovableObject {
    height = 225;
    width = 120;
    y = 155;
    IMAGES_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];
    currentImage = 0;
    constructor() {
        super();
        this.loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; //result => 0,1,2,3,4,5,0,1,2 ....
            this.img = this.imageCache[i];
            this.currentImage++;
        }, 100);
    }
    jump() {
        console.log("jumpUp");
    }
}
