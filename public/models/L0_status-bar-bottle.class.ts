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

   setPercentage(percentage: number) {
      this.percentage = this.percentage;
      let imagePath = this.imageStatusBarBottle[this.resolveImageIndex(percentage)];
      this.img = imagePath;
   }

   resolveImageIndex(percentage: any) {
      if (this.percentage == 100) {
         return 5;
      } else if (this.percentage >= 80) {
         return 4;
      } else if (this.percentage >= 60) {
         return 3;
      } else if (this.percentage >= 40) {
         return 2;
      } else if (this.percentage >= 20) {
         return 1;
      } else {
         return 0;
      }
   }

   loadImages(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageStatusBarBottle.push(img);
      });
   }
}