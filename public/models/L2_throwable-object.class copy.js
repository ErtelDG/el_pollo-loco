"use strict";
class ThrowableObject extends MovableObject {
    constructor(characterX, characterY) {
        super();
        this.x = characterX;
        this.y = characterY;
        this.height = 60;
        this.width = 50;
        this.loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
        this.throw(this.x, this.y);
    }
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}
