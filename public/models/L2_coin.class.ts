class Coin extends MovableObject {
   height: number = 125;
   width: number = 125;
   IMAGES = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];
   //walking_enemie_sound = new Audio("audio/chicken.mp3");
   pick_coin = new Audio("audio/pick_coin.mp3");

   constructor() {
      super();
      this.loadImage(this.IMAGES[0]);
      this.loadImagesWalking(this.IMAGES);
      this.x = 500 + Math.random() * 6500; //Zahl zwischen 200 und 700
      this.y = 75 + Math.random() * 200;
      this.animate();
      this.offset.bottom = 90;
      this.offset.left = 40;
      this.offset.right = 40;
      this.offset.top = 40;
   }

   /**
    * function to animate the object
    */
   animate() {
      setInterval(() => {
         this.animationObjects(this.IMAGES, this.imageCache);
      }, 120);
   }
}
