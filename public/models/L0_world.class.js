"use strict";
class World {
    character = new Character();
    level = level1;
    // enemies = level1.enemies;
    // clouds = level1.clouds;
    // backgrounds = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
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
            this.addObjectsToMap(this.level.backgroundObjects);
            this.addObjectsToMap(this.level.clouds);
            this.addCharacterToMap(this.character);
            this.addObjectsToMap(this.level.enemies);
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
