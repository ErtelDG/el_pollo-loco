class Cloud extends MovableObject {
   y = 10;
   width = canvasWidth;
   height = 250;
   constructor(imgPath: string) {
      super();
      this.loadImage(imgPath);
      this.x = Math.random() * 500; //Zahl zwischen 200 und 700
      this.moveCloud();
   }

   moveCloud() {
      setInterval(() => {
         this.x -= 0.2;
      }, 1000/60);
   }
}
