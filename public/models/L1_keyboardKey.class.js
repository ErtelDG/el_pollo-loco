"use strict";
class KeyboardKeys {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    constructor() {
        this.keyPressEvents();
        this.btnPressEvents();
    }
    /**
     * function => interaction user when using touch screen
     */
    btnPressEvents() {
        document.getElementById("arrow-left")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.LEFT = true;
        });
        document.getElementById("arrow-left")?.addEventListener("touchend", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.LEFT = false;
        });
        document.getElementById("arrow-right")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.RIGHT = true;
        });
        document.getElementById("arrow-right")?.addEventListener("touchend", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.RIGHT = false;
        });
        document.getElementById("start-icon")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            restart();
        });
        document.getElementById("sound-icon")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            soundOnOff();
        });
        document.getElementById("arrow-up")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.UP = true;
        });
        document.getElementById("arrow-up")?.addEventListener("touchend", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.UP = false;
        });
        document.getElementById("throw-bottle")?.addEventListener("touchstart", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.D = true;
        });
        document.getElementById("throw-bottle")?.addEventListener("touchend", (e) => {
            if (e.cancelable)
                e.preventDefault();
            keyboard.D = false;
        });
    }
    /**
     * function => interaction user when press a key
     */
    keyPressEvents() {
        window.addEventListener("keydown", (e) => {
            if (e.key == "ArrowRight") {
                keyboard.RIGHT = true;
            }
            if (e.key == "ArrowLeft") {
                keyboard.LEFT = true;
            }
            if (e.key == "ArrowUp") {
                keyboard.UP = true;
            }
            if (e.key == "ArrowDown") {
                keyboard.DOWN = true;
            }
            if (e.key == " ") {
                keyboard.SPACE = true;
            }
            if (e.key == "d") {
                keyboard.D = true;
            }
        });
        window.addEventListener("keyup", (e) => {
            if (e.key == "ArrowRight") {
                keyboard.RIGHT = false;
            }
            if (e.key == "ArrowLeft") {
                keyboard.LEFT = false;
            }
            if (e.key == "ArrowUp") {
                keyboard.UP = false;
            }
            if (e.key == "ArrowDown") {
                keyboard.DOWN = false;
            }
            if (e.key == " ") {
                keyboard.SPACE = false;
            }
            if (e.key == "d") {
                keyboard.D = false;
            }
        });
    }
}
