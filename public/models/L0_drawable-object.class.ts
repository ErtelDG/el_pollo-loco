class DrawableObject {
   ctx: any;
   img: any;
   imageCache: any = [];
   imageCacheJump: any = [];
   imageCacheDead: any = [];
   imageCacheHeart: any = [];
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

   loadImagesJump(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheJump.push(img);
      });
   }

   loadImagesDead(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheDead.push(img);
      });
   }

   loadImagesHurt(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheHeart.push(img);
      });
   }

   // loadImagesImagesStatusbarHp(arr: any[]) {
   //    arr.forEach((path: string) => {
   //       let img = new Image();
   //       img.src = path;
   //       this.imageCacheImagesStatusbarHp.push(img);
   //    });
   // }

   drawRectangle(x: any, y: any, width: any, height: any) {
      this.ctx.beginPath();
      this.ctx.lineWidth = "5";
      this.ctx.strokeStyle = "blue";
      this.ctx.rect(x, y, width, height);
      this.ctx.stroke();
   }

   drawImage(objectToDraw: Chicken | Cloud | BackgroundObject | Coin) {
      if (this.ctx != null) {
         this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
         this.drawRectangle(objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
      }
   }
}
