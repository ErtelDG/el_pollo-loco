let canvas: number | HTMLCanvasElement;
let world: World;
let canvasHeight: number = 400;
let canvasWidth: number = 720;
let keyboard = new KeyboardKeys();

let startScreen: HTMLElement;
let endScreen: HTMLElement;
let gameOverContain: HTMLElement;
let winContain: HTMLElement;
let startSide: HTMLElement;

// Set a fake timeout to get the highest timeout id
function stopAllIntervals() {
   var highestTimeoutId = setTimeout(";");
   for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
   }
}

function init() {
   startScreen = document.getElementById("startScreen") as HTMLElement;
   endScreen = document.getElementById("end-screen") as HTMLElement;
   gameOverContain = document.getElementById("game-over-container") as HTMLElement;
   winContain = document.getElementById("win-container") as HTMLElement;
   startSide = document.getElementById("startSide") as HTMLElement;

   startScreen.style.display = "none";

   createdLevel();
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
   init();
}
