class Coin extends MovableObject {
   height: number = 125;
   width: number = 125;
    IMAGES_WALKING = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];
   walking_enemie_sound = new Audio("audio/chicken.mp3");

   constructor() {
      super();
      this.loadImage(this.IMAGES_WALKING[0]);
      this.loadImagesWalking(this.IMAGES_WALKING);
      this.x = 500 + Math.random() * 6500; //Zahl zwischen 200 und 700
      this.y = 75 + Math.random() * 200;
      this.animate();
   }
   animate() {
      setInterval(() => {
         this.animationObjects(this.IMAGES_WALKING, this.imageCache);
      }, 120);
   }
}
