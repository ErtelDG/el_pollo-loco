"use strict";
class MovableObject extends DrawableObject {
    constructor() {
        super();
    }
    speed = 0.15;
    otherDirection = false;
    offsetY = this.y + this.height;
    speedY = 0;
    bottles = 0;
    coins = 0;
    energy = 100;
    acceleration = 3;
    lastHit = 0;
    /**
     * function for objects gravity
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 50);
    }
    /**
     * function to chech the object is above ground
     *
     * @returns is object above ground false or true
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 150;
        }
    }
    /**
     * function to move object right
     */
    moveRight() {
        this.x += this.speed;
    }
    /**
     * function to move object left
     */
    moveLeft() {
        this.x -= this.speed;
    }
    /**
     * function to get img for animation objects
     */
    animationObjects(images, Cach) {
        let i = this.currentImage % images.length;
        this.img = Cach[i];
        this.currentImage++;
    }
    /**
     * function to the object jump
     */
    jump() {
        this.speedY = 32;
    }
    /**
     * function to check collision user with enemies
     *
     * @param obj => object where colisson the user
     * @returns => true when colission, false when not
     */
    isColliding(obj) {
        return (this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
            this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
            this.y + this.height >= obj.y + 50 &&
            this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
        //<= obj.y + obj.height && obj.onCollisionCourse  ==  + this.height
        ); // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }
    /**
     * function => when user with enemy collision, reduce lives user character and end the game when energy/lives is null
     */
    hit() {
        this.energy -= 1;
        if (this.energy < 0) {
            this.gameOverAnimation();
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * set colldown passed time for next hurt time
     */
    isHurt() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 1;
    }
    /**
     * function set energy to null when character user dead is
     *
     * @returns set energy character to null
     */
    isDead() {
        return this.energy == 0;
    }
    /**
     * start game over animation
     */
    gameOverAnimation() {
        this.energy = 0;
        world.character.damage_character.pause();
        world.background_sound.pause();
        setInterval(() => {
            stopAllIntervals();
            closeFullscreen();
            endScreen.classList.remove("endscreen-hidden");
            gameOverContain.classList.remove("endscreen-hidden");
            startSide.style.display = "none";
        }, 1500);
    }
}
