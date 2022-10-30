let canvas: number | HTMLCanvasElement;
let world;
let canvasHeight: number = 400;
let canvasWidth: number = 720;

function init() {
   canvas = document.getElementById("canvas") as HTMLCanvasElement;
   canvas.width = canvasWidth;
   canvas.height = canvasHeight;
   world = new World(canvas);
}
