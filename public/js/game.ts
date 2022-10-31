let canvas: number | HTMLCanvasElement;
let world: World;
let canvasHeight: number = 400;
let canvasWidth: number = 720;
let keyboard = new KeyboardKeys();
let level;

function init() {
   canvas = document.getElementById("canvas") as HTMLCanvasElement;
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
});
