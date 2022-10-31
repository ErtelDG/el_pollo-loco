class Chicken extends MovableObject {
   y = 300;
   height: number = 75;
   width: number = 50;
   IMAGES_WALKING = [
      "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
   ];
   currentImage = 0;

   constructor() {
      super();
      this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
      this.loadImages(this.IMAGES_WALKING);
      this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 700
      this.moveChicken();
   }
   moveChicken() {
      setInterval(() => {
         this.x -= 1;
      }, 1000 / 60);

      setInterval(() => {
         let i = this.currentImage % this.IMAGES_WALKING.length;
         this.img = this.IMAGES_WALKING[i];
         this.currentImage++;
      }, 1000);
   }
}
