class Character extends MovableObject {
   height: number = 225;
   width: number = 120;
   y: number = 50;
   world: any;
   speed = 10;

   IMAGES_WALKING = [
      "img/2_character_pepe/2_walk/W-21.png",
      "img/2_character_pepe/2_walk/W-22.png",
      "img/2_character_pepe/2_walk/W-23.png",
      "img/2_character_pepe/2_walk/W-24.png",
      "img/2_character_pepe/2_walk/W-25.png",
      "img/2_character_pepe/2_walk/W-26.png",
   ];

   IMAGES_JUMPING = [
      "img/2_character_pepe/3_jump/J-31.png",
      "img/2_character_pepe/3_jump/J-32.png",
      "img/2_character_pepe/3_jump/J-33.png",
      "img/2_character_pepe/3_jump/J-34.png",
      "img/2_character_pepe/3_jump/J-35.png",
      "img/2_character_pepe/3_jump/J-36.png",
      "img/2_character_pepe/3_jump/J-37.png",
      "img/2_character_pepe/3_jump/J-38.png",
      "img/2_character_pepe/3_jump/J-39.png",
   ];

   walking_sound = new Audio("audio/running.mp3");
   jump_sound = new Audio("audio/jump.mp3");

   constructor() {
      super();
      this.loadImage("img/2_character_pepe/2_walk/W-21.png");
      this.loadImagesWalking(this.IMAGES_WALKING);
      this.loadImagesJump(this.IMAGES_JUMPING);
      this.applyGravity();
      this.animate();
   }

   animate() {
      setInterval(() => {
         this.walking_sound.pause();
         if (world.character.world.keyboard.RIGHT && this.x < world.level.level_end) {
            this.moveRight();
              this.otherDirection = false;
            if (world.character.world.keyboard.UP || world.character.world.keyboard.SPACE) {
               this.walking_sound.pause();
            } else {
               this.walking_sound.play();
            }
            this.walking_sound.volume = 0.1;
         }
         if (world.character.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
             this.otherDirection = true;
            if (world.character.world.keyboard.UP || world.character.world.keyboard.SPACE) {
               this.walking_sound.pause();
            } else {
               this.walking_sound.play();
            }

            this.walking_sound.volume = 0.1;
         }

         if ((world.character.world.keyboard.UP && !this.isAboveGround()) || (world.character.world.keyboard.SPACE && !this.isAboveGround())) {
            this.jump();
            this.jump_sound.volume = 0.01;
            this.jump_sound.play();
            this.walking_sound.pause();
         }

         world.camera_x = -this.x + 100;
      }, 1000 / 60);

      setInterval(() => {
         if (this.isAboveGround()) {
            this.animationObjects(this.IMAGES_JUMPING, this.imageCacheJump);
         } else {
            if (world.character.world.keyboard.RIGHT || world.character.world.keyboard.LEFT) {
               this.animationObjects(this.IMAGES_WALKING, this.imageCache);
            }
         }
      }, 50);
   }
}
