"use strict";
class Cloud extends MovableObject {
    width = 720;
    height = 250;
    IMAGES_CLOUD = ["img/5_background/layers/4_clouds/1.png", "img/5_background/layers/4_clouds/2.png"];
    constructor() {
        super();
        this.loadImage(this.IMAGES_CLOUD[0]);
        this.loadImagesWalking(this.IMAGES_CLOUD);
        this.x = -720 + Math.random() * 7200; //Zahl zwischen 200 und 700
        this.y = 10 + Math.random() * 50;
        this.moveCloud();
    }
    /**
     *  auto move the object
     */
    moveCloud() {
        this.moveLeft();
    }
}
