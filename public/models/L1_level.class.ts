class Level {
   enemies = [];
   clouds = [];
   backgroundObjects = [];
   coins = [];
   bottles = [];
   level_end = 7200;

   constructor(enemies: any, clouds: any, backgroundObjects: any, coins: any, bottles: any) {
      (this.enemies = enemies), (this.clouds = clouds), (this.backgroundObjects = backgroundObjects), (this.coins = coins), (this.bottles = bottles);
   }
}
