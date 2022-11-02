class MovableObject {
   constructor() {}
   x: number = 120;
   y: number = 230;
   img: any;
   height: number = 150;
   width: number = 100;
   imageCache: any = [];
   imageCacheJump: any = [];
   currentImage = 0;
   speed = 0.15;
   otherDirection = false;
   speedY = 0;
   acceleration = 3;

   applyGravity() {
      setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
         }
      }, 50);
   }

   isAboveGround() {
      return this.y < 150;
   }

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

   moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        
   }

   moveLeft() {
      setInterval(() => {
         this.x -= this.speed;
      }, 1000 / 60);
   }

   animationObjects(images: string | any[], Cach: any[]) {
      let i = this.currentImage % images.length;
      this.img = Cach[i];
      this.currentImage++;
   }

   jump() {
      this.speedY = 30;
   }
}
