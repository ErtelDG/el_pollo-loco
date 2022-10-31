"use strict";
class World {
    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext("2d"),
            this.canvas = canvas;
        this.draw();
    }
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Cloud("img/5_background/layers/4_clouds/1.png")];
    backgrounds = [
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
    ];
    draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.addObjectsToMap(this.backgrounds);
            this.addObjectsToMap(this.clouds);
            this.addCharacterToMap(this.character);
            this.addObjectsToMap(this.enemies);
            //draw wird immer wieder
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
    }
    addCharacterToMap(character) {
        if (this.ctx != null) {
            this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
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
