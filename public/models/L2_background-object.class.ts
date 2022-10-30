class BackgroundObject extends MovableObject {
   width = canvasWidth;
   height = canvasHeight;

   constructor(imgPath: string, x: number) {
      super();
      this.loadImage(imgPath);
      this.x = x;
      this.y = canvasHeight - this.height;
   }
}
