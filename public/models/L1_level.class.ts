class Level {
   enemies = [];
   clouds = [];
   backgroundObjects = [];

   constructor(enemies: any, clouds: any, backgroundObjects: any) {
      (this.enemies = enemies), (this.clouds = clouds), (this.backgroundObjects = backgroundObjects);
   }
}
