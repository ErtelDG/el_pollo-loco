class Level {
   enemies = [];
   clouds = [];
   backgroundObjects = [];
   level_end = 0;

   constructor(enemies: any, clouds: any, backgroundObjects: any) {
      (this.enemies = enemies), (this.clouds = clouds), (this.backgroundObjects = backgroundObjects);
   }
}
