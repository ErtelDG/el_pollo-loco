"use strict";
class StatusBar extends DrawableObject {
    IMAGES_STATUSBAR_HP = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ];
    imageStatusBarHp = [];
    percentage = 100;
    constructor() {
        super();
        this.loadImage(this.IMAGES_STATUSBAR_HP[5]);
        this.loadImagesStatusBarHp(this.IMAGES_STATUSBAR_HP);
        this.x = 120;
        this.y = 160;
        this.height = 75;
        this.width = 200;
        this.setPercentage(100);
    }
    setPercentage(percentage) {
        this.percentage = this.percentage;
        let imagePath = this.imageStatusBarHp[this.resolveImageIndex(percentage)];
        this.img = imagePath;
    }
    resolveImageIndex(percentage) {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage >= 80) {
            return 4;
        }
        else if (this.percentage >= 60) {
            return 3;
        }
        else if (this.percentage >= 40) {
            return 2;
        }
        else if (this.percentage >= 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
    loadImagesStatusBarHp(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageStatusBarHp.push(img);
        });
    }
}
