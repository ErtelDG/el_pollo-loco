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
let fullscreenOnOff = false;
let fullscreen = document.getElementById("fullscreen");
let soundIconImg;
let canvasElement = document.getElementById("canvas");
let smallScreenIcon = document.getElementById("small-screen-icon");
function stopAllIntervals() {
    getAllIntervalsAndStop();
}
function init() {
    getIdHtmlELements();
    hiddenStartScreen();
    createdLevel();
    setCancvasProperties();
    createNewWorld();
}
function restart() {
    closeEndOpenStartScreen();
    stopBackgroundMusic();
    stopAllIntervals();
    init();
}
function soundOnOff() {
    return background_sound_On_Off ? soundOff() : soundOn();
}
function soundOff() {
    background_sound_On_Off = false;
    world.background_sound.pause();
    soundIconImg.src = "img/10_design/sound-off-icon.png";
}
function soundOn() {
    background_sound_On_Off = true;
    world.background_sound.play();
    soundIconImg.src = "img/10_design/sound-on-icon.png";
}
function getIdHtmlELements() {
    startScreen = document.getElementById("startScreen");
    endScreen = document.getElementById("end-screen");
    gameOverContain = document.getElementById("game-over-container");
    winContain = document.getElementById("win-container");
    startSide = document.getElementById("startSide");
    soundIconImg = document.getElementById("sound-icon-img");
}
function getAllIntervalsAndStop() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}
function setCancvasProperties() {
    canvas = document.getElementById("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}
function setFullscreen() {
    enterFullscreen(fullscreen);
}
function enterFullscreen(element) {
    canvasElement.classList.add("canvas-width-fullscreen");
    smallScreenIcon.classList.remove("exitFullscreenHidden");
    fullscreenOnOff = true;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.msRequestFullscreen) {
        // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    }
    else if (element.webkitRequestFullscreen) {
        // iOS Safari
        element.webkitRequestFullscreen();
    }
}
function closeFullscreen() {
    if (fullscreenOnOff) {
        canvasElement.classList.remove("canvas-width-fullscreen");
        smallScreenIcon.classList.add("exitFullscreenHidden");
        fullscreenOnOff = false;
        exitFullscreen();
    }
}
function exitFullscreen() {
    document.exitFullscreen();
}
function hiddenStartScreen() {
    startScreen.style.display = "none";
}
function createNewWorld() {
    world = new World(canvas, keyboard);
}
function closeEndOpenStartScreen() {
    endScreen.classList.add("endscreen-hidden");
    gameOverContain.classList.add("endscreen-hidden");
    startSide.style.display = "";
}
function stopBackgroundMusic() {
    world.background_sound.pause();
}
