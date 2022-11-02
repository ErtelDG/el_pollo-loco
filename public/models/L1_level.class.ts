class Level {
   enemies = [];
   clouds = [];
   backgroundObjects = [];
   coins= [];
   level_end = 7200;

   constructor(enemies: any, clouds: any, backgroundObjects: any, coins:any) {
      (this.enemies = enemies), (this.clouds = clouds), (this.backgroundObjects = backgroundObjects), this.coins = coins;
   }
}
