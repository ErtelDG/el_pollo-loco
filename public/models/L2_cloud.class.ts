class Cloud extends MovableObject {
     y = 10; 
   width = 500;
    height = 250;
   constructor() {
      super();
      this.loadImage("img/5_background/layers/4_clouds/1.png");
      this.x = Math.random() * 500; //Zahl zwischen 200 und 700
    
     
   }
}
