"use strict";
class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Cloud("img/5_background/layers/4_clouds/1.png")];
    backgrounds = [];
    backgroundImages = [
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/air.png", 719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
    ];
    constructor(canvas, keyboard) {
        (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }
    setWorld() {
        this.character.world = this;
    }
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.backgrounds);
            this.addObjectsToMap(this.clouds);
            this.addCharacterToMap(this.character);
            this.addObjectsToMap(this.enemies);
            this.ctx.translate(-this.camera_x, 0);
            //draw wird immer wieder
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
    }
    addCharacterToMap(character) {
        if (character.otherDirection) {
            this.ctx.save();
            this.ctx.translate(character.width, 0);
            this.ctx.scale(-1, 1);
            character.x = character.x * -1;
        }
        if (this.ctx != null) {
            this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        }
        if (character.otherDirection) {
            this.ctx.restore();
            character.x = character.x * -1;
        }
    }
    addObjectsToMap(obj) {
        obj.forEach((obj_x) => {
            this.drawImage(obj_x);
        });
    }
    drawImage(objectToDraw) {
        if (this.ctx != null) {
            this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
        }
    }
}
