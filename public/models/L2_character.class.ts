class Character extends MovableObject {
   height: number = 225;
   width: number = 120;
   y: number = 155;
   constructor() {
      super();
      this.loadImage("img/2_character_pepe/2_walk/W-21.png");
   }

   jump() {
      console.log("jumpUp");
   }
}
