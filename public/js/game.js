"use strict";
let canvas;
let world;
let canvasHeight = 400;
let canvasWidth = 720;
function init() {
    canvas = document.getElementById("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    world = new World(canvas);
}
