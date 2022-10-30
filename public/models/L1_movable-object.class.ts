class MovableObject {
   constructor() {}
   x: number = 120;
   y: number = 250;
   img: any;
   height: number = 150;
   width: number = 100;
   

   // loadImage ('img/test.png')
   loadImage(path: string) {
      this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
      this.img.src = path;
   }

   moveRight() {
         console.log("moveRight");
      // e = document.onkeydown;
      // this.checkKey(onkeydown);
   }
   moveLeft() {
      console.log("moveLeft");
   }
}
