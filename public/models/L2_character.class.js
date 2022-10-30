"use strict";
class Character extends MovableObject {
    height = 225;
    width = 120;
    y = 155;
    constructor() {
        super();
        this.loadImage("img/2_character_pepe/2_walk/W-21.png");
    }
    jump() {
        console.log("jumpUp");
    }
}
