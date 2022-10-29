"use strict";
class MovableObject {
    constructor() { }
    x = 120;
    y = 80;
    img;
    height = 150;
    width = 100;
    // loadImage ('img/test.png')
    loadImage(path) {
        this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    moveRight() {
        console.log("moveRight");
        // e = document.onkeydown;
        // this.checkKey(onkeydown);
    }
    moveLeft() {
        console.log("moveLeft");
    }
}
