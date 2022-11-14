class StatusBarCoin extends DrawableObject {
   IMAGES_ARRAY = [
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
   ];

   imageStatusBarCoins: any = [];

   percentage = 100;

   constructor() {
      super();
      this.loadImage(this.IMAGES_ARRAY[0]);
      this.loadImages(this.IMAGES_ARRAY);
      this.x = 270;
      this.y = 5;
      this.height = 40;
      this.width = 120;
      this.setPercentage(0);
   }

   /**
    * function to load the correct img to persentage coins
    *
    * @param percentage => persentage as number
    */
   setPercentage(percentage: number) {
      this.percentage = this.percentage;
      let imagePath = this.imageStatusBarCoins[this.resolveImageIndex(percentage)];
      this.img = imagePath;
   }

   /**
    * function to load correct coin img
    *
    * @param arr => array with all coins img
    */
   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageStatusBarCoins.push(img);
      });
   }
}
