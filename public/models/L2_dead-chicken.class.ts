class DeadChicken extends MovableObject {
   y = 300;
   height: number = 75;
   width: number = 50;
   IMAGES_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

   constructor(deadX: number, deadY: number) {
      super();
      this.loadImage(this.IMAGES_DEAD[0]);
      this.x = deadX;
      this.y = deadY;
      this.speed = 0;
   }
}
