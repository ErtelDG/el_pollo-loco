"use strict";
class World {
    ctx;
    character = new Character();
    statusBarHp = new StatusBarHp();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    level = level1;
    coinsInWorld = this.level.coins.length;
    coinsPercentage = (100 / this.coinsInWorld) * this.character.coins;
    bottlesInWorld = this.level.bottles.length;
    bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
    canvas;
    throwableObject = [];
    keyboard;
    camera_x = 0;
    constructor(canvas, keyboard) {
        (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollectsCoins();
            this.checkPickBottle();
            this.checkThrowObjects();
        }, 200);
    }
    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
        }
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHp.setPercentage(this.character.energy);
            }
        });
    }
    checkCollectsCoins() {
        this.level.coins.forEach(async (coin) => {
            if (this.character.isColliding(coin)) {
                if (this.level.coins.includes(coin)) {
                    await this.level.coins.splice(this.level.coins.indexOf(coin, 0), 1);
                }
                this.character.collectsCoin();
                this.coinsPercentage = (100 / this.coinsInWorld) * this.character.coins;
                this.statusBarCoin.setPercentage(this.coinsPercentage);
            }
        });
    }
    checkPickBottle() {
        this.level.bottles.forEach(async (bottle) => {
            if (this.character.isColliding(bottle)) {
                if (this.level.bottles.includes(bottle)) {
                    await this.level.bottles.splice(this.level.bottles.indexOf(bottle, 0), 1);
                }
                this.character.collectBottle();
                this.bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
                this.statusBarBottle.setPercentage(this.bottlesPercentage);
                console.log(this.bottlesPercentage);
            }
        });
    }
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.backgroundObjects);
            this.addToMap(this.character);
            this.addObjectsToMap(this.level.bottles);
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
