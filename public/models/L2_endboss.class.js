"use strict";
class Endboss extends MovableObject {
    height = 300;
    width = 200;
    y = 80;
    IMAGES_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    constructor() {
        super();
        this.loadImage(this.IMAGES_ALERT[0]);
        this.loadImagesWalking(this.IMAGES_ALERT);
        this.x = 7000;
        this.animate();
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            this.animationObjects(this.IMAGES_ALERT, this.imageCache);
        }, 200);
    }
}
