"use strict";
class World {
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Cloud()];
    backgrounds = [new BackgroundObject()];
    canvas;
    ctx;
    constructor(canvas) {
        (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
        this.draw();
    }
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
            this.enemies.forEach((enemy) => {
                if (this.ctx != null) {
                    this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
                }
            });
            this.clouds.forEach((cloud) => {
                if (this.ctx != null) {
                    this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
                }
            });
            this.backgrounds.forEach((background) => {
                if (this.ctx != null) {
                    this.ctx.drawImage(background.img, background.x, background.y, background.width, background.height);
                }
            });
            //draw wird immer wieder
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
            this.character.moveRight();
        }
    }
}
