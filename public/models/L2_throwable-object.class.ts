class ThrowableObject extends MovableObject {
   IMAGES_ARRAY = [
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
   ];

   imagesRotationBottle: any = [];
   splash_sound = new Audio("audio/splash.mp3");

   constructor(characterX: number, characterY: number) {
      super();
      this.x = characterX;
      this.y = characterY;
      this.height = 60;
      this.width = 50;
      this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
      this.loadImages(this.IMAGES_ARRAY);
      this.throw(this.x, this.y);
      this.animate();
   }

   throw(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.speedY = 20;
      this.applyGravity();
      setInterval(() => {
         this.x += 10;
      }, 25);
   }

   /**
    * function to load allthrow img in array for img path to load later
    *
    * @param arr => array with all throw imgs
    */
   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imagesRotationBottle.push(img);
      });
   }

   /**
    * function to animate the object
    */
   animate() {
      setInterval(() => {
         this.animationObjects(this.IMAGES_ARRAY, this.imagesRotationBottle);
      }, 120);
   }
}
