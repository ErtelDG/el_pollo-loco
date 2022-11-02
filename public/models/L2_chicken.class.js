"use strict";
class Chicken extends MovableObject {
    y = 300;
    height = 75;
    width = 50;
    IMAGES_WALKING = [
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];
    walking_enemie_sound = new Audio("audio/chicken.mp3");
    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 6500; //Zahl zwischen 200 und 700
        this.speed = this.speed + Math.random() * 0.8;
        this.animate();
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            this.animationEnemiesWalking(this.IMAGES_WALKING);
        }, 120);
        setInterval(() => {
            this.walking_enemie_sound.volume = 0.03;
            this.walking_enemie_sound.play();
        }, 5000);
    }
}
