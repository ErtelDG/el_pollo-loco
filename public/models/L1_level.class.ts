class Level {
   enemies = [];
   endboss = [];
   clouds = [];
   backgroundObjects = [];
   coins = [];
   bottles = [];
   level_end = 7200;

   constructor(enemies: any, endboss: any, clouds: any, backgroundObjects: any, coins: any, bottles: any) {
      (this.enemies = enemies),
         (this.endboss = endboss),
         (this.clouds = clouds),
         (this.backgroundObjects = backgroundObjects),
         (this.coins = coins),
         (this.bottles = bottles);
   }
}
