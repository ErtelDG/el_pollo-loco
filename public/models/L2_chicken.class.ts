class Chicken extends MovableObject {
   y = 300;
   height: number = 75;
   width: number = 50;
   IMAGES_WALKING = [
      "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
   ];
   walking_enemie_sound = new Audio("audio/chicken.mp3");
   damage_enemie = new Audio("audio/chicken_damage.mp3");

   constructor() {
      super();
      this.loadImage(this.IMAGES_WALKING[0]);
      this.loadImagesWalking(this.IMAGES_WALKING);
      this.x = 500 + Math.random() * 6500; //Zahl zwischen 200 und 700
      this.speed = this.speed + Math.random() * 0.8;
      this.animate();
   }

   /**
    * function to animate the object
    */
   animate() {
      setInterval(() => {
         this.moveLeft();
      }, 1000 / 120);
      setInterval(() => {
         this.animationObjects(this.IMAGES_WALKING, this.imageCache);
      }, 120);
      setInterval(() => {
         this.walking_enemie_sound.volume = 0.005;
         this.walking_enemie_sound.play();
      }, 5000);
   }
}
