"use strict";
class Character extends MovableObject {
    height = 225;
    width = 120;
    y = 50;
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
    IMAGES_JUMPING = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png",
    ];
    walking_sound = new Audio("audio/running.mp3");
    constructor() {
        super();
        this.loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImagesWalking(this.IMAGES_WALKING);
        this.loadImagesJump(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (world.character.world.keyboard.RIGHT && this.x < world.level.level_end) {
                this.moveRight();
                this.walking_sound.play();
            }
            if (world.character.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if ((world.character.world.keyboard.UP && !this.isAboveGround()) || (world.character.world.keyboard.SPACE && !this.isAboveGround())) {
                this.jump();
            }
            world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            if (this.isAboveGround()) {
                this.animationObjects(this.IMAGES_JUMPING, this.imageCacheJump);
            }
            else {
                if (world.character.world.keyboard.RIGHT || world.character.world.keyboard.LEFT) {
                    this.animationObjects(this.IMAGES_WALKING, this.imageCache);
                }
            }
        }, 50);
    }
}
