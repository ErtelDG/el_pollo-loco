class DrawableObject {
   img: any;
   imageCache: any = [];
   imageCacheImagesStatusbarHp: any = [];
   currentImage = 0;
   x: number = 120;
   y: number = 230;
   height: number = 150;
   width: number = 100;

   constructor() {}

   // loadImage ('img/test.png')
   loadImage(path: string) {
      this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
      this.img.src = path;
   }

   /**
    *     *
    * @param {Array} arr - ['img/image1.png','img/image2.png',....]
    */

   loadImagesWalking(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCache.push(img);
      });
   }

   loadImagesImagesStatusbarHp(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheImagesStatusbarHp.push(img);
      });
   }
}
