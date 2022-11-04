"use strict";
class World {
    ctx;
    character = new Character();
    statusBarHp = new StatusBarHp();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    throwableObject = [new ThrowableObject()];
    level = level1;
    coinsPercentage = (100 / this.level.coins.length) * this.character.coins;
    canvas;
    keyboard;
    camera_x = 0;
    constructor(canvas, keyboard) {
        (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.collectsCoin();
                    this.statusBarHp.setPercentage(this.character.energy);
                }
            });
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.collectsCoin();
                    this.coinsPercentage = (100 / this.level.coins.length) * this.character.coins;
                    this.statusBarCoin.setPercentage(this.coinsPercentage);
                    console.log(this.coinsPercentage);
                    console.log(this.character.coins);
                }
            });
        }, 200);
    }
    setWorld() {
        this.character.world = this;
    }
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.backgroundObjects);
            this.addToMap(this.character);
            this.addObjectsToMap(this.level.clouds);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.level.coins);
            this.addObjectsToMap(this.throwableObject);
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBarHp);
            this.addToMap(this.statusBarBottle);
            this.addToMap(this.statusBarCoin);
            this.ctx.translate(this.camera_x, 0);
            this.ctx.translate(-this.camera_x, 0);
            //draw wird immer wieder
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
    }
    addToMap(obj_x) {
        if (obj_x.otherDirection) {
            this.flipImage(obj_x);
        }
        if (this.ctx != null) {
            try {
                this.ctx.drawImage(obj_x.img, obj_x.x, obj_x.y, obj_x.width, obj_x.height);
            }
            catch (e) {
                console.warn("Error loading image", e);
                console.warn("Cold not load image,", obj_x.img, obj_x.x, obj_x.y, obj_x.width, obj_x.height);
                debugger;
            }
            this.drawRectangle(obj_x.x, obj_x.y, obj_x.width, obj_x.height);
        }
        if (obj_x.otherDirection) {
            this.ctx.restore();
            obj_x.x = obj_x.x * -1;
        }
    }
    addObjectsToMap(obj) {
        obj.forEach((obj_x) => {
            this.drawElements(obj_x);
            this.drawRectangle(obj_x.x, obj_x.y, obj_x.width, obj_x.height);
        });
    }
    flipImage(character) {
        this.ctx.save();
        this.ctx.translate(character.width, 0);
        this.ctx.scale(-1, 1);
        character.x = character.x * -1;
    }
    drawRectangle(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.lineWidth = "5";
        this.ctx.strokeStyle = "blue";
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
    }
    drawElements(objectToDraw) {
        if (this.ctx != null) {
            this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
        }
    }
}
