"use strict";
class DeadEndboss extends MovableObject {
    y = 300;
    height = 250;
    width = 250;
    IMAGES_DEAD = ["img/4_enemie_boss_chicken/5_dead/G24.png", "img/4_enemie_boss_chicken/5_dead/G25.png", "img/4_enemie_boss_chicken/5_dead/G26.png"];
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
    animate() {
        let y = 200;
        if (y < 800) {
            setInterval(() => {
                this.animationObjects(this.IMAGES_DEAD, this.imageCacheDead);
                console.log("Endboss Alert");
            }, y);
            setTimeout(() => {
                y = y + 200;
            }, 200);
        }
        setTimeout(() => {
            this.loadImage(this.IMAGES_DEAD[0]);
        }, 800);
    }
    loadImagesDead(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheDead.push(img);
        });
    }
}
