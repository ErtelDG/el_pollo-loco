"use strict";
class Endboss extends MovableObject {
    height = 300;
    width = 200;
    y = 80;
    energy = 3;
    endbossMoveLeft = false;
    endbossAlert = true;
    endbossAttack = false;
    walking_enemie_sound = new Audio("audio/chicken.mp3");
    IMAGES_WALK = [
        "img/4_enemie_boss_chicken/1_walk/G1.png",
        "img/4_enemie_boss_chicken/1_walk/G2.png",
        "img/4_enemie_boss_chicken/1_walk/G3.png",
        "img/4_enemie_boss_chicken/1_walk/G4.png",
    ];
    imageCacheWalk = [];
    IMAGES_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    imageCacheAlert = [];
    IMAGES_ATTACK = [
        "img/4_enemie_boss_chicken/3_attack/G13.png",
        "img/4_enemie_boss_chicken/3_attack/G14.png",
        "img/4_enemie_boss_chicken/3_attack/G15.png",
        "img/4_enemie_boss_chicken/3_attack/G16.png",
        "img/4_enemie_boss_chicken/3_attack/G17.png",
        "img/4_enemie_boss_chicken/3_attack/G18.png",
        "img/4_enemie_boss_chicken/3_attack/G19.png",
        "img/4_enemie_boss_chicken/3_attack/G20.png",
    ];
    imageCacheAttack = [];
    IMAGES_HURT = ["img/4_enemie_boss_chicken/4_hurt/G21.png", "img/4_enemie_boss_chicken/4_hurt/G22.png", "img/4_enemie_boss_chicken/4_hurt/G23.png"];
    imageCacheHurt = [];
    IMAGES_DEAD = ["img/4_enemie_boss_chicken/5_dead/G24.png", "img/4_enemie_boss_chicken/5_dead/G25.png", "img/4_enemie_boss_chicken/5_dead/G26.png"];
    imageCacheDead = [];
    constructor() {
        super();
        this.loadImage(this.IMAGES_ALERT[0]);
        this.loadImagesAlert(this.IMAGES_ALERT);
        this.loadImagesWalking(this.IMAGES_WALK);
        this.loadImagesAttack(this.IMAGES_ATTACK);
        this.loadImagesDead(this.IMAGES_DEAD);
        this.loadImagesHurt(this.IMAGES_HURT);
        this.x = 7000;
        this.animate();
        this.energy = 3;
        this.intervall();
    }
    animate() {
        setInterval(() => {
            //this.animationObjects(this.IMAGES_ALERT, this.imageCacheAlert);
            //  setInterval(() => {
            //     if (this.isDead()) {
            //        this.animationObjects(this.IMAGES_DEAD, this.imageCacheDead);
            //     } else if (this.isWalking()) {
            //     } else if (this.isAttack()) {
            //     } else if (this.isHurt()) {
            //        this.animationObjects(this.IMAGES_HURT, this.imageCacheHurt);
            //     } else {
            //     }
            //  }, 50);
            if (this.endbossAlert == true) {
                this.animationObjects(this.IMAGES_ALERT, this.imageCacheAlert);
                console.log("Endboss Alert");
            }
            else if (this.endbossMoveLeft == true) {
                this.animationObjects(this.IMAGES_WALK, this.imageCacheWalk);
                this.x -= 2;
                console.log("Endboss MoveLeft");
            }
            else if (this.endbossAttack == true) {
                this.animationObjects(this.IMAGES_ATTACK, this.imageCacheAttack);
                console.log("Endboss Attacke");
            }
            else {
            }
        }, 100);
    }
    intervall() {
        setInterval(() => {
            this.endbossAlert = false;
            this.endbossMoveLeft = true;
            this.endbossAttack = false;
        }, 2000);
        setInterval(() => {
            this.endbossAlert = false;
            this.endbossMoveLeft = false;
            this.endbossAttack = true;
        }, 8000);
        setInterval(() => {
            this.endbossAttack = false;
            this.endbossMoveLeft = false;
            this.endbossAlert = true;
        }, 12000);
    }
    loadImagesAlert(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheAlert.push(img);
        });
    }
    loadImagesWalking(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheWalk.push(img);
        });
    }
    loadImagesAttack(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheAttack.push(img);
        });
    }
    loadImagesDead(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheDead.push(img);
        });
    }
    loadImagesHurt(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheHurt.push(img);
        });
    }
    isWalking() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 1;
    }
    isAttack() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 1;
    }
}
