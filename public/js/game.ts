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
let fullscreenOnOff = false;
let fullscreen = document.getElementById("fullscreen") as HTMLElement;
let soundIconImg: HTMLImageElement;
let canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
let smallScreenIcon = document.getElementById("small-screen-icon") as HTMLElement;

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
   startScreen = document.getElementById("startScreen") as HTMLElement;
   endScreen = document.getElementById("end-screen") as HTMLElement;
   gameOverContain = document.getElementById("game-over-container") as HTMLElement;
   winContain = document.getElementById("win-container") as HTMLElement;
   startSide = document.getElementById("startSide") as HTMLElement;
   soundIconImg = document.getElementById("sound-icon-img") as HTMLImageElement;
}

function getAllIntervalsAndStop() {
   var highestTimeoutId = setTimeout(";");
   for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
   }
}

function setCancvasProperties() {
   canvas = document.getElementById("canvas") as HTMLCanvasElement;
   canvas.width = canvasWidth;
   canvas.height = canvasHeight;
}

function setFullscreen() {
   enterFullscreen(fullscreen);
}

function enterFullscreen(element: any) {
   canvasElement.classList.add("canvas-width-fullscreen");
   smallScreenIcon.classList.remove("exitFullscreenHidden");
   fullscreenOnOff = true;
   if (element.requestFullscreen) {
      element.requestFullscreen();
   } else if (element.msRequestFullscreen) {
      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
   } else if (element.webkitRequestFullscreen) {
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
