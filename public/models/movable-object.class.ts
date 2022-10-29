class MovableObject {
   constructor() {}
   x: number = 120;
   y: number = 80;
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

//    checkKey(e: any) {
//       e = e || window.event;
//       if (e != null) {
//          if (e.keyCode == "39") {
//             // right arrow
//             console.log("moveRight");
//             this.x = this.x+1;
//          }
//       }
//    }
}
