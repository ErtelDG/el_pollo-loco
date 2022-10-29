let canvas;
let world;

function init() {
   canvas = document.getElementById("canvas") as HTMLCanvasElement;
   world = new World(canvas);
}
