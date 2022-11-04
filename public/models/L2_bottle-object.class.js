"use strict";
class Bottle extends MovableObject {
    IMAGES = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png", "img/6_salsa_bottle/2_salsa_bottle_on_ground.png"];
    constructor() {
        super();
        this.x = this.x;
        this.y = this.y;
        this.height = 60;
        this.width = 50;
        this.loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    }
}
