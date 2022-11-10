"use strict";
let canvas;
let world;
let canvasHeight = 400;
let canvasWidth = 720;
let keyboard = new KeyboardKeys();
let startScreen;
let endScreen;
let gameOverContain;
let winContain;
let startSide;
let background_sound_On_Off = true;
let soundIconImg;
// Set a fake timeout to get the highest timeout id
function stopAllIntervals() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}
function init() {
    startScreen = document.getElementById("startScreen");
    endScreen = document.getElementById("end-screen");
    gameOverContain = document.getElementById("game-over-container");
    winContain = document.getElementById("win-container");
    startSide = document.getElementById("startSide");
    soundIconImg = document.getElementById("sound-icon-img");
    startScreen.style.display = "none";
    createdLevel();
    canvas = document.getElementById("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    world = new World(canvas, keyboard);
}
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
function restart() {
    endScreen.classList.add("endscreen-hidden");
    gameOverContain.classList.add("endscreen-hidden");
    startSide.style.display = "";
    world.background_sound.pause();
    stopAllIntervals();
    init();
}
function soundOnOff() {
    if (background_sound_On_Off) {
        background_sound_On_Off = false;
        world.background_sound.pause();
        soundIconImg.src = "img/10_design/sound-off-icon.png";
    }
    else {
        background_sound_On_Off = true;
        world.background_sound.play();
        soundIconImg.src = "img/10_design/sound-on-icon.png";
    }
}
