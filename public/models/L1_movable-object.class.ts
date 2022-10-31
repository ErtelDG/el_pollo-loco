class MovableObject {
   constructor() {}
   x: number = 120;
   y: number = 230;
   img: any;
   height: number = 150;
   width: number = 100;
   imageCache: any = [];
   currentImage = 0;
   speed = 0.15;
   otherDirection = false;

   // loadImage ('img/test.png')
   loadImage(path: string) {
      this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
      this.img.src = path;
   }

   /**
    *     *
    * @param {Array} arr - ['img/image1.png','img/image2.png',....]
    */
   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCache.push(img);
      });
   }

   moveRight() {
      console.log("moveRight");
   }

   moveLeft() {
      setInterval(() => {
         this.x -= this.speed;
      }, 1000 / 60);
   }
}
