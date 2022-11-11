"use strict";
class DeadEndboss extends MovableObject {
    y = 300;
    height = 250;
    width = 250;
    IMAGES_DEAD = ["img/4_enemie_boss_chicken/5_dead/G24.png", "img/4_enemie_boss_chicken/5_dead/G25.png", "img/4_enemie_boss_chicken/5_dead/G26.png"];
    IMAGE_ENDDEAD = ["img/4_enemie_boss_chicken/5_dead/G26.png"];
    imageCacheDead = [];
    constructor(deadX, deadY) {
        super();
        this.loadImage(this.IMAGES_DEAD[0]);
        this.loadImagesDead(this.IMAGES_DEAD);
        this.x = deadX;
        this.y = deadY;
        this.speed = 0;
        this.animate();
    }
    /**
     * function to animate the object
     */
    animate() {
        let endossDeadSimulation = setInterval(() => {
            this.animationObjects(this.IMAGES_DEAD, this.imageCacheDead);
        }, 100);
        setTimeout(() => {
            clearInterval(endossDeadSimulation);
            this.loadImage(this.IMAGE_ENDDEAD[0]);
        }, 400);
    }
    /**
     * function to animate dead the object
     */
    loadImagesDead(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheDead.push(img);
        });
    }
}
