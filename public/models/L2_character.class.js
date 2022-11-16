"use strict";
class Character extends MovableObject {
    height = 225;
    width = 120;
    y = 50;
    world;
    speed = 18;
    stopLeft = 0;
    imageCacheIdle = [];
    imageCacheWalking = [];
    imageCacheJump = [];
    imageCacheDead = [];
    imageCacheHeart = [];
    hightJumpPoint = false;
    damage_character = new Audio("audio/character_damage.mp3");
    lose_sound = new Audio("audio/lose.mp3");
    IMAGES_IDLE = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
        "img/2_character_pepe/1_idle/idle/I-10.png",
    ];
    IMAGES_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];
    IMAGES_JUMPING = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png",
    ];
    IMAGES_DEAD = [
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png",
    ];
    IMAGES_HURT = ["img/2_character_pepe/4_hurt/H-41.png", "img/2_character_pepe/4_hurt/H-42.png", "img/2_character_pepe/4_hurt/H-43.png"];
    walking_sound = new Audio("audio/running.mp3");
    jump_sound = new Audio("audio/jump.mp3");
    constructor() {
        super();
        this.loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImagesIdle(this.IMAGES_IDLE);
        this.loadImagesWalking(this.IMAGES_WALKING);
        this.loadImagesJump(this.IMAGES_JUMPING);
        this.loadImagesDead(this.IMAGES_DEAD);
        this.loadImagesHurt(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
        this.offset.bottom = 25;
        this.offset.left = 20;
        this.offset.right = 20;
        this.offset.top = 25;
    }
    /**
     * increase coin counter
     */
    collectsCoin() {
        this.coins += 1;
    }
    /**
     * increase bottle counter
     */
    collectBottle() {
        this.bottles += 1;
    }
    /**
     * animate character when user interacts with key or button
     */
    animate() {
        setInterval(() => {
            this.stopWalkingSoundWhenNoInteracts();
            this.userCharacterGoRight();
            this.userCharacterGoLeft();
            this.userCharacterGoJump();
            world.camera_x = -this.x + 100;
        }, 1000 / 30);
        setInterval(() => {
            this.loadCorrectImageWhenDeadHurtOrAboveGround();
        }, 50);
    }
    /**
     * function to load images for jump animation
     *
     * @param arr => array with jump images
     */
    loadImagesJump(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheJump.push(img);
        });
    }
    /**
     * function to load images for dead animation
     *
     * @param arr => array with dead images
     */
    loadImagesDead(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheDead.push(img);
        });
    }
    /**
     * function to load images for hurt animation
     *
     * @param arr => array with hurt images
     */
    loadImagesHurt(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheHeart.push(img);
        });
    }
    /**
     * function to load images for idle animation
     *
     * @param arr => array with idle images
     */
    loadImagesIdle(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCacheIdle.push(img);
        });
    }
    /**
     * stop walking sound when character stand on th point
     */
    stopWalkingSoundWhenNoInteracts() {
        this.walking_sound.pause();
    }
    /**
     * sound and animation when character must go right
     */
    userCharacterGoRight() {
        if (this.pressRightAndCharacterIsNotAtTheWorldEnd()) {
            this.moveRight();
            this.otherDirection = false;
            if (world.character.world.keyboard.UP || world.character.world.keyboard.SPACE) {
                this.walking_sound.pause();
            }
            else {
                this.walking_sound.play();
            }
            this.walking_sound.volume = 0.1;
        }
    }
    pressRightAndCharacterIsNotAtTheWorldEnd() {
        return world.character.world.keyboard.RIGHT && this.x < world.level.level_end;
    }
    /**
     * sound and animation when character must go left
     */
    userCharacterGoLeft() {
        if (this.pressLeftAndCharacterIsNotAtTheWorldStart()) {
            this.moveLeft();
            this.otherDirection = true;
            if (world.character.world.keyboard.UP || world.character.world.keyboard.SPACE) {
                this.walking_sound.pause();
            }
            else {
                this.walking_sound.play();
            }
            this.walking_sound.volume = 0.1;
        }
    }
    pressLeftAndCharacterIsNotAtTheWorldStart() {
        return world.character.world.keyboard.LEFT && this.x > this.stopLeft;
    }
    /**
     * sound and animation when character must jump
     */
    userCharacterGoJump() {
        if (this.whenIsPressAJumpKeyTrue()) {
            this.jump();
            this.jump_sound.volume = 0.01;
            this.jump_sound.play();
            this.walking_sound.pause();
        }
    }
    whenIsPressAJumpKeyTrue() {
        return (world.character.world.keyboard.UP && !this.isAboveGround()) || (world.character.world.keyboard.SPACE && !this.isAboveGround());
    }
    /**
     * function check which animation must play, when character id dead, hurt, walking, idle or jump
     */
    loadCorrectImageWhenDeadHurtOrAboveGround() {
        if (this.isDead()) {
            this.deadAnimationCharacter();
        }
        else if (this.isHurt()) {
            this.animationObjects(this.IMAGES_HURT, this.imageCacheHeart);
        }
        else if (this.isAboveGround()) {
            this.jumpAnimationCharacter();
        }
        else if (world.character.world.keyboard.RIGHT || world.character.world.keyboard.LEFT) {
            this.animationObjects(this.IMAGES_WALKING, this.imageCache);
        }
        else {
            this.animationObjects(this.IMAGES_IDLE, this.imageCacheIdle);
        }
    }
    /**
     * sound and animation when character is dead
     */
    deadAnimationCharacter() {
        this.animationObjects(this.IMAGES_DEAD, this.imageCacheDead);
        this.lose_sound.volume = 0.5;
        this.lose_sound.play();
    }
    /**
     * function check which animation must play, when character jump up and go down
     */
    jumpAnimationCharacter() {
        setInterval(() => {
            if (this.hightJumpPoint == true) {
                this.jumpAnimationUpToDown();
            }
            else {
                this.jumpAnimationDownToUp();
            }
        }, 25);
    }
    /**
     * animation when character go up to down => fall
     */
    jumpAnimationUpToDown() {
        if (this.y >= 130) {
            this.img = this.imageCacheJump[8];
            this.hightJumpPoint = false;
        }
        else if (this.y >= 70) {
            this.img = this.imageCacheJump[7];
        }
        else if (this.y >= 15) {
            this.img = this.imageCacheJump[6];
        }
        else if (this.y >= 0) {
            this.img = this.imageCacheJump[5];
        }
        else if (this.y >= -15) {
            this.img = this.imageCacheJump[4];
        }
    }
    /**
     * animation when character go down to up => jump
     */
    jumpAnimationDownToUp() {
        if (this.y <= 0) {
            this.hightJumpPoint = true;
        }
        else if (this.y <= 100) {
            this.img = this.imageCacheJump[3];
        }
        else if (this.y <= 120) {
            this.img = this.imageCacheJump[2];
        }
        else if (this.y <= 140) {
            this.img = this.imageCacheJump[1];
        }
        else {
            this.y = 158;
        }
    }
}
