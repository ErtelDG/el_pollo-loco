"use strict";
class StatusBarCoin extends DrawableObject {
    IMAGES_ARRAY = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png"
    ];
    imageStatusBarCoins = [];
    percentage = 100;
    constructor() {
        super();
        this.loadImage(this.IMAGES_ARRAY[0]);
        this.loadImages(this.IMAGES_ARRAY);
        this.x = 270;
        this.y = 5;
        this.height = 40;
        this.width = 120;
        this.setPercentage(0);
    }
    setPercentage(percentage) {
        this.percentage = this.percentage;
        let imagePath = this.imageStatusBarCoins[this.resolveImageIndex(percentage)];
        this.img = imagePath;
    }
    resolveImageIndex(percentage) {
        if (percentage >= 100) {
            return 5;
        }
        else if (percentage >= 80) {
            return 4;
        }
        else if (percentage >= 60) {
            return 3;
        }
        else if (percentage >= 40) {
            return 2;
        }
        else if (percentage >= 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageStatusBarCoins.push(img);
        });
    }
}