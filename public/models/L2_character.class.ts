class Character extends MovableObject {
   height: number = 225;
   width: number = 120;
   y: number = 155;
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

   constructor() {
      super();
      this.loadImage("img/2_character_pepe/2_walk/W-21.png");
      this.loadImages(this.IMAGES_WALKING);
      this.animate();
   }

   animate() {
      setInterval(() => {
         if (world.character.world.keyboard.RIGHT) {
            this.x += this.speed;
            this.otherDirection = false;
         }
         if (world.character.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
         }
         world.camera_x = -this.x + 100;
      }, 1000 / 60);

      setInterval(() => {
         if (world.character.world.keyboard.RIGHT || world.character.world.keyboard.LEFT) {
            let i = this.currentImage % this.IMAGES_WALKING.length; //result => 0,1,2,3,4,5,0,1,2 ....
            this.img = this.imageCache[i];
            this.currentImage++;
         }
      }, 50);
   }

   jump() {
      console.log("jumpUp");
   }
}
