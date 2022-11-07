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
    bottlesSplash = [];
    deadEnemies = [];
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
            this.checkSplashBottle();
            this.checkBottleCollisionEnemies();
            this.removeSplashBottleArray();
        }, 50);
        setInterval(() => {
            this.checkThrowObjects();
        }, 200);
    }
    checkThrowObjects() {
        if (this.keyboard.D) {
            if (this.character.bottles > 0) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObject.push(bottle);
                this.character.bottles -= 1;
                this.bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
                this.statusBarBottle.setPercentage(this.bottlesPercentage);
            }
        }
    }
    removeSplashBottleArray() {
        if (this.bottlesSplash != null) {
            this.bottlesSplash.forEach((bottle) => {
                setTimeout(() => {
                    if (this.bottlesSplash.includes(bottle)) {
                        this.bottlesSplash.splice(this.bottlesSplash.indexOf(bottle, 0), 1);
                    }
                }, 700);
            });
        }
    }
    checkSplashBottle() {
        setInterval(() => {
            if (this.throwableObject != null) {
                this.throwableObject.forEach((bottle) => {
                    if (bottle.y > 300) {
                        let splashBottle = new SplashBottleObject(bottle.x, bottle.y);
                        this.bottlesSplash.push(splashBottle);
                        if (this.throwableObject.includes(bottle)) {
                            this.throwableObject.splice(this.throwableObject.indexOf(bottle, 0), 1);
                        }
                    }
                });
            }
        }, 10);
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHp.setPercentage(this.character.energy);
            }
            else if (
            // hit von oben
            this.character.x + this.character.width - this.character.offset.right >= enemy.x + enemy.offset.left + 50 &&
                this.character.x + this.character.offset.left <= enemy.x + enemy.width - enemy.offset.right &&
                this.character.y + this.character.height - this.character.offset.bottom >= enemy.y - 50 &&
                this.character.y + this.character.offset.top <= enemy.y + enemy.height - enemy.offset.bottom) {
                //lebendes huhn entfernen vom bild
                if (this.level.enemies.includes(enemy)) {
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy, 0), 1);
                }
                //Totes Chicken hinzufügen
                let deadEnemy = new DeadChicken(enemy.x, enemy.y);
                this.deadEnemies.push(deadEnemy);
                console.log("Hit top");
            }
            else {
            }
        });
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBarHp.setPercentage(this.character.energy);
            }
        });
    }
    checkBottleCollisionEnemies() {
        setInterval(() => {
            //bottle enemie collision checken
            this.level.enemies.forEach((enemy) => {
                this.throwableObject.forEach((throwableBottle) => {
                    if (throwableBottle.x + throwableBottle.width >= enemy.x &&
                        throwableBottle.x <= enemy.x + enemy.width &&
                        throwableBottle.y + throwableBottle.height >= enemy.y &&
                        throwableBottle.y <= enemy.y + enemy.height
                    //<= obj.y + obj.height && obj.onCollisionCourse  ==  + this.height
                    ) {
                        //platzende Flasche erstellen
                        let splashBottle = new SplashBottleObject(throwableBottle.x, throwableBottle.y + 25);
                        this.bottlesSplash.push(splashBottle);
                        if (this.throwableObject.includes(throwableBottle)) {
                            this.throwableObject.splice(this.throwableObject.indexOf(throwableBottle, 0), 1);
                        }
                        //Splash array bereinigen
                        this.removeSplashBottleArray();
                        //Totes Chicken hinzufügen
                        let deadEnemy = new DeadChicken(enemy.x, enemy.y);
                        this.deadEnemies.push(deadEnemy);
                        //lebendes huhn entfernen vom bild
                        if (this.level.enemies.includes(enemy)) {
                            this.level.enemies.splice(this.level.enemies.indexOf(enemy, 0), 1);
                        }
                        console.log("Bottle trifft Enemie");
                    }
                });
            });
        }, 5);
        setInterval(() => {
            //bottle endboss collision checken
            this.level.endboss.forEach((endboss) => {
                this.throwableObject.forEach((throwableBottle) => {
                    if (throwableBottle.x + throwableBottle.width >= endboss.x &&
                        throwableBottle.x <= endboss.x + endboss.width &&
                        throwableBottle.y + throwableBottle.height >= endboss.y &&
                        throwableBottle.y <= endboss.y + endboss.height
                    //<= obj.y + obj.height && obj.onCollisionCourse  ==  + this.height
                    ) {
                        //platzende Flasche erstellen
                        let splashBottle = new SplashBottleObject(throwableBottle.x, throwableBottle.y + 25);
                        this.bottlesSplash.push(splashBottle);
                        if (this.throwableObject.includes(throwableBottle)) {
                            this.throwableObject.splice(this.throwableObject.indexOf(throwableBottle, 0), 1);
                        }
                        endboss.hitEndboss = true;
                        //Splash array bereinigen
                        this.removeSplashBottleArray();
                        endboss.energy -= 1;
                        console.log("Bottle trifft Endboss", endboss.energy);
                        if (endboss.energy == 0) {
                            //Totes Chicken hinzufügen
                            let deadEnemy = new DeadEndboss(endboss.x, endboss.y + 80);
                            this.deadEnemies.push(deadEnemy);
                            //lebendes huhn entfernen vom bild
                            if (this.level.endboss.includes(endboss)) {
                                this.level.endboss.splice(this.level.enemies.indexOf(endboss, 0), 1);
                            }
                            console.log("Endboss tot");
                        }
                    }
                });
            });
        }, 10);
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
            }
        });
    }
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.backgroundObjects);
            this.addObjectsToMap(this.bottlesSplash);
            this.addToMap(this.character);
            this.addObjectsToMap(this.level.bottles);
            this.addObjectsToMap(this.level.clouds);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.level.endboss);
            this.addObjectsToMap(this.deadEnemies);
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
