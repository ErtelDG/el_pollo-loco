"use strict";
class StatusBarHp extends DrawableObject {
    IMAGES_ARRAY = [
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
        this.loadImage(this.IMAGES_ARRAY[5]);
        this.loadImages(this.IMAGES_ARRAY);
        this.x = 120;
        this.y = 5;
        this.height = 40;
        this.width = 120;
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
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageStatusBarHp.push(img);
        });
    }
}
