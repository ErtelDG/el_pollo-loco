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
let background_sound_On_Off = true;

let soundIconImg: HTMLImageElement;

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
   soundIconImg = document.getElementById("sound-icon-img") as HTMLImageElement;
 

   startScreen.style.display = "none";

   createdLevel();
   canvas = document.getElementById("canvas") as HTMLCanvasElement;
   canvas.width = canvasWidth;
   canvas.height = canvasHeight;
   world = new World(canvas, keyboard);
}


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
   } else {
      background_sound_On_Off = true;
      world.background_sound.play();
      soundIconImg.src = "img/10_design/sound-on-icon.png";
   }
}
