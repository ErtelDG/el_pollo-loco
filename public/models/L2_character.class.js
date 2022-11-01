"use strict";
class Character extends MovableObject {
    height = 225;
    width = 120;
    y = 155;
    world;
    speed = 10;
    IMAGES_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];
    walking_sound = new Audio("audio/running.mp3");
    constructor() {
        super();
        this.loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (world.character.world.keyboard.RIGHT && this.x < world.level.level_end) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (world.character.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            if (world.character.world.keyboard.RIGHT || world.character.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length; //result => 0,1,2,3,4,5,0,1,2 ....
                this.img = this.imageCache[i];
                this.currentImage++;
            }
        }, 50);
    }
    jump() {
        console.log("jumpUp");
    }
}
