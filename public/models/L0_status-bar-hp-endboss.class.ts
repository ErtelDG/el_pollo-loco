class StatusBarHpEndboss extends DrawableObject {
   IMAGES_ARRAY = [
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
   ];

   imageStatusBarHp: any = [];

   percentage = 100;

   constructor() {
      super();
      this.loadImage(this.IMAGES_ARRAY[5]);
      this.loadImages(this.IMAGES_ARRAY);
      this.x = 590;
      this.y = 5;
      this.height = 40;
      this.width = 120;
      this.setPercentage(100);
   }

   /**
    * function to load the correct img to persentage coins
    *
    * @param percentage => persentage as number
    */
   setPercentage(percentage: number) {
      this.percentage = percentage;
      let imagePath = this.imageStatusBarHp[this.resolveImageIndex(percentage)];
      this.img = imagePath;
   }


   /**
    * function to load correct statusbar HP endboss img
    *
    * @param arr => array with all statusbar HP endboss img
    */
   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageStatusBarHp.push(img);
      });
   }
}
