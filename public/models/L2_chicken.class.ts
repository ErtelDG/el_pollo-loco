class Chicken extends MovableObject {
   y = 300;
   height: number = 75;
   width: number = 50;
   constructor() {
      super();
      this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
      this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 700
      this.moveChicken();
   }
   moveChicken() {
      setInterval(() => {
         this.x -= 1;
      }, 1000 / 60);
   }
}
