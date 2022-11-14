let level1: any;

function createdLevel(this: any) {
   level1 = new Level(createChickens(), createEndboss(), createClouds(), createBackgrounds(), createCoins(), createBottles());

   function createChickens() {
      return [
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
         new Chicken(),
      ];
   }

   function createEndboss() {
      return [new Endboss()];
   }

   function createClouds() {
      return [
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
         new Cloud(),
      ];
   }

   function createBackgrounds() {
      return [
         new BackgroundObject("img/5_background/layers/air.png", -719),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),
         new BackgroundObject("img/5_background/layers/air.png", 0),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
         new BackgroundObject("img/5_background/layers/air.png", 719),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 2),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 2),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 2),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 3),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 3),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 3),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 4),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 4),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 4),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 4),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 5),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 5),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 5),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 5),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 6),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 6),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 6),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 6),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 7),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 7),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 7),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 7),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 8),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 8),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 8),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 8),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 9),
         new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 9),
         new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 9),
         new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 9),
         new BackgroundObject("img/5_background/layers/air.png", 719 * 10),
         new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 10),
         new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 10),
         new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 10),
      ];
   }

   function createCoins() {
      return [
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
         new Coin(),
      ];
   }

   function createBottles() {
      return [
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle(),
         new Bottle()
      ];
   }
}
