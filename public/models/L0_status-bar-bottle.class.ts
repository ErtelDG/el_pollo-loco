class StatusBarBottle extends DrawableObject {
   IMAGES_ARRAY = [
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
   ];

   imageStatusBarBottle: any = [];

   percentage = 0;

   constructor() {
      super();
      this.loadImage(this.IMAGES_ARRAY[0]);
      this.loadImages(this.IMAGES_ARRAY);
      this.x = 140;
      this.y = 5;
      this.height = 40;
      this.width = 120;
      this.setPercentage(0);
   }

   /**
    * function to load the correct img to persentage bottles
    *
    * @param percentage => persentage as number
    */
   setPercentage(percentage: number) {
      this.percentage = percentage;
      let imagePath = this.imageStatusBarBottle[this.resolveImageIndex(percentage)];
      this.img = imagePath;
   }

   /**
    * function to load correct bottle img
    * 
    * @param arr => array with all bottle img
    */
   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageStatusBarBottle.push(img);
      });
   }
}
