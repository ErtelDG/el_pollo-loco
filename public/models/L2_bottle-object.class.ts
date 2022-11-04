class Bottle extends MovableObject {
   IMAGES = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png", "img/6_salsa_bottle/2_salsa_bottle_on_ground.png"];

   constructor() {
      super();
      this.x = 250 + Math.random()*5000;
      this.y = 320;
      this.height = 60;
      this.width = 50;
      this.loadImage(this.IMAGES[0]);
      this.loadImagesBottles(this.IMAGES);
   }

   loadImagesBottles(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCache.push(img);
      });
   }
}
