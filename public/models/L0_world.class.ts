class World {
   ctx;
   character = new Character();
   statusBarHp = new StatusBarHp();
   statusBarBottle = new StatusBarBottle();
   statusBarCoin = new StatusBarCoin();
   statusBarEndboss = new StatusBarHpEndboss();
   level = level1;
   coinsInWorld = this.level.coins.length;
   coinsPercentage = (100 / this.coinsInWorld) * this.character.coins;
   bottlesInWorld = this.level.bottles.length;
   bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
   bottlesSplash: any = [];
   deadEnemies: any = [];
   canvas;
   throwableObject: any = [];
   keyboard;
   camera_x = 0;
   background_sound = new Audio("audio/background_sound.mp3");

   win_sound = new Audio("audio/win.mp3");

   constructor(canvas: any, keyboard: any) {
      (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
      this.keyboard = keyboard;
      this.draw();
      this.setWorld();
      this.run();
      this.playBackgroundMusic();
      keyboard.btnPressEvents();
   }

   /**
    * variable so object can address itself
    */
   setWorld() {
      this.character.world = this;
   }

   /**
    * ongoing checks during the game
    */
   run() {
      setInterval(() => this.checkAllObjectCollisions(), 20);
      setInterval(() => this.checkThrowObjects(), 200);
   }

   /**
    * create the game and images
    */
   draw() {
      this.drawAllObjects();
      this.requestAnimation();
   }

   /**
    * check bottle collisions
    */
   checkAllObjectCollisions() {
      this.checkCollisions();
      this.checkCollectsCoins();
      this.checkPickBottle();
      this.checkSplashBottle();
      this.checkBottleCollisionEnemies();
      this.removeSplashBottleArray();
      this.characterComeNearbyEndboss();
   }

   /**
    * what objects to draw
    */
   drawAllObjects() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.camera_x, 0);
      this.addObjectsToMap(this.level.backgroundObjects);
      this.drawSolidObjectsToMap();
      this.addToMap(this.character);
      this.ctx.translate(-this.camera_x, 0);
      this.addStatusBarsToMap();
      if (this.character.x > 5800) {
         this.addToMap(this.statusBarEndboss);
      }
      this.ctx.translate(this.camera_x, 0);
      this.ctx.translate(-this.camera_x, 0);
   }

   drawSolidObjectsToMap() {
      this.addObjectsToMap(this.bottlesSplash);
      this.addObjectsToMap(this.level.bottles);
      this.addObjectsToMap(this.level.clouds);
      this.addObjectsToMap(this.level.enemies);
      this.addObjectsToMap(this.level.endboss);
      this.addObjectsToMap(this.deadEnemies);
      this.addObjectsToMap(this.level.coins);
      this.addObjectsToMap(this.throwableObject);
   }

   addStatusBarsToMap() {
      this.addToMap(this.statusBarHp);
      this.addToMap(this.statusBarBottle);
      this.addToMap(this.statusBarCoin);
   }

   /**
    * check distance to final boss to trigger event
    */
   characterComeNearbyEndboss() {
      this.character.x > 5000
         ? this.level.endboss.forEach((endboss: any) => (endboss.characterNearbyEndboss = true))
         : this.level.endboss.forEach((endboss: any) => (endboss.characterNearbyEndboss = false));
   }

   /**
    * check user press the throw key => true => throw bottle
    */
   checkThrowObjects() {
      this.pressThrowKeyThrowBottle();
   }

   /**
    * is bottle splash, remove it from ground
    */
   removeSplashBottleArray() {
      this.removeSplashBottle();
   }

   /**
    * check bottle splash on ground, play splash sound and show a splash bottle
    */
   checkSplashBottle() {
      this.checkBottleIsOnGroundAndSplash();
   }

   /**
    * check character collision with enemies and endboss
    */
   checkCollisions() {
      this.level.enemies.forEach(async (enemy: any) => this.characterIsCollidingEnemies(enemy));
      this.level.endboss.forEach((endboss: any) => this.characterIsCollidingEndboss(endboss));
   }

   /**
    * check bottle collision with enemies
    */
   checkBottleCollisionEnemies() {
      setInterval(() => this.bottleColissionEnemy(), 5);
      setInterval(() => this.bottleColissionEndboss(), 10);
   }

   /**
    * check character collision with coin => pick coin
    */
   checkCollectsCoins() {
      this.level.coins.forEach(async (coin: any) => {
         if (this.character.isColliding(coin)) {
            this.playSoundPickCoin(coin);
            this.level.coins.includes(coin) == true && (await this.level.coins.splice(this.level.coins.indexOf(coin, 0), 1));
            this.character.collectsCoin();
            this.updateStatusBarCoin();
         }
      });
   }

   /**
    * check character collision with bottle => pick bottle
    */
   checkPickBottle() {
      this.level.bottles.forEach(async (bottle: any) => {
         if (this.character.isColliding(bottle)) {
            bottle.blob_sound.play();
            if (this.level.bottles.includes(bottle)) {
               await this.level.bottles.splice(this.level.bottles.indexOf(bottle, 0), 1);
            }
            this.character.collectBottle();
            this.updateStatusBarBottle();
         }
      });
   }

   /**
    * draw the character and statusbar to the map/canvas
    *
    * @param obj_x => the character and statusbar to draw
    */
   addToMap(obj_x: any) {
      if (obj_x.otherDirection) this.flipImage(obj_x);
      this.ctx.drawImage(obj_x.img, obj_x.x, obj_x.y, obj_x.width, obj_x.height);
      if (obj_x.otherDirection) {
         this.ctx.restore();
         obj_x.x = obj_x.x * -1;
      }
   }

   /**
    * draw all the other objects except character/statusbar
    *
    * @param obj  the other objects where draw; except character/statusbar
    */
   addObjectsToMap(obj: any) {
      obj.forEach((obj_x: Chicken | Cloud | BackgroundObject | Coin | ThrowableObject | Endboss) => this.drawElements(obj_x));
   }

   /**
    * function mirrow the object
    *
    * @param character the object to mirrow
    */
   flipImage(character: Character) {
      this.ctx.save();
      this.ctx.translate(character.width, 0);
      this.ctx.scale(-1, 1);
      character.x = character.x * -1;
   }

   /**
    *
    * @param objectToDraw object where are draw with his parameter => img, coordinate
    */
   drawElements(objectToDraw: Chicken | Cloud | BackgroundObject | Coin | StatusBarHp | ThrowableObject | Endboss) {
      this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
   }

   /**
    * play background music, when game run
    */
   playBackgroundMusic() {
      if (background_sound_On_Off) {
         this.background_sound.volume = 0.1;
         this.background_sound.play();
      }
   }

   /**
    * set the request animation
    */
   requestAnimation() {
      //draw wird immer wieder
      let self = this;
      requestAnimationFrame(function () {
         self.draw();
      });
   }

   /**
    * character colliding with enemy, character loses energy, play damage sound and update persentage
    */
   characterCollidingWithEnemy() {
      this.character.damage_character.volume = 0.1;
      this.character.damage_character.play();
      this.character.hit();
      this.statusBarHp.setPercentage(this.character.energy);
   }

   /**
    * function check, when character hit a enemy from up
    *
    * @param enemy => the enemy to hit from up
    * @returns => hit => true, no hit => false
    */
   characterHitsEnemieFromAbove(enemy: any) {
      return (
         this.character.x + this.character.width - this.character.offset.right >= enemy.x + enemy.offset.left &&
         this.character.x + this.character.offset.left <= enemy.x + enemy.width - enemy.offset.right &&
         this.character.y + this.character.height - this.character.offset.bottom >= enemy.y &&
         this.character.y + this.character.offset.top <= enemy.y + enemy.height - enemy.offset.bottom
      );
   }

   /**
    * function that removes an enemy when it is killed and displays a dead enemy
    * play enemy damage sound
    *
    * @param enemy => the enemy object where is kill
    */
   async showEnemieKill(enemy: any) {
      this.playDamageEnemySound(enemy);
      if (this.level.enemies.includes(enemy)) this.level.enemies.splice(this.level.enemies.indexOf(enemy, 0), 1);
      let deadEnemy = new DeadChicken(enemy.x, enemy.y);
      await this.deadEnemies.push(deadEnemy);
      setTimeout(() => this.removeDeadEnemyFromArray(deadEnemy), 2500);
   }

   /**
    *function is check colliding character with enemy from up => enemy become damage or from the side => character become damage
    *
    * @param enemy => the object where colliding with character
    * @returns is colliding from up => enemy become damage or from the side => character become damage
    */
   characterIsCollidingEnemies = (enemy: any) => {
      if (this.character.isColliding(enemy)) {
         this.characterCollidingWithEnemy();
      } else if (this.characterHitsEnemieFromAbove(enemy)) {
         this.showEnemieKill(enemy);
      }
   };

   /**
    * function is check colliding character withendboss from the side => character become damage
    *
    * @param endboss => the endboss object
    */
   characterIsCollidingEndboss(endboss: any) {
      if (this.character.isColliding(endboss)) {
         this.characterCollidingWithEnemy();
         this.hitCharacterAndUpdateHitPersentage();
      }
   }

   /**
    * function when press throw key, create a new throw bottle and update the statusbar bottle and the stock of throwable bottle
    */
   pressThrowKeyThrowBottle() {
      if (this.keyboard.D) {
         if (this.character.bottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
            this.character.bottles -= 1;
            this.bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
            this.statusBarBottle.setPercentage(this.bottlesPercentage);
         }
      }
   }

   /**
    * function remove splash/broken bottles
    */
   removeSplashBottle() {
      this.bottlesSplash.forEach((bottle: any) => {
         setTimeout(() => {
            if (this.bottlesSplash.includes(bottle)) {
               this.bottlesSplash.splice(this.bottlesSplash.indexOf(bottle, 0), 1);
            }
         }, 700);
      });
   }

   /**
    * check is the bottle is on ground, when true set bottleSplash of true
    */
   checkBottleIsOnGroundAndSplash() {
      setInterval(() => this.throwableObject.forEach((bottle: any) => this.bottleSplashTrue(bottle)), 10);
   }

   /**
    * function check if a throwable bottle collision an enemy
    */
   bottleColissionEnemy() {
      this.level.enemies.forEach((enemy: any) => {
         this.throwableObject.forEach((throwableBottle: any) => {
            if (this.coordinatesBottleColissionEnemyColission(throwableBottle, enemy)) {
               this.playDamageEnemySound(enemy);
               this.createNewSplashBottle(throwableBottle);
               this.removeSplashBottleArray();
               let deadEnemy = this.createDeadChickenAndRemoveLiveChicken(enemy);
               setTimeout(() => this.removeDeadEnemyFromArray(deadEnemy), 2500);
            }
         });
      });
   }

   /**
    * function check if a throwable bottle collision an endboss
    */
   bottleColissionEndboss() {
      this.level.endboss.forEach((endboss: any) => {
         this.throwableObject.forEach((throwableBottle: any) => this.bottleCollisionWithEndbossTrue(endboss, throwableBottle));
      });
   }

   /**
    * function play animation from broken bottle and this sound
    *
    * @param bottle the bottle object broken
    */
   bottleSplashTrue(bottle: any) {
      if (bottle.y > 300) {
         bottle.splash_sound.play();
         let splashBottle = new SplashBottleObject(bottle.x, bottle.y);
         this.bottlesSplash.push(splashBottle);
         if (this.throwableObject.includes(bottle)) this.throwableObject.splice(this.throwableObject.indexOf(bottle, 0), 1);
      }
   }

   /**
    * function play a collect coin sound
    *
    * @param coin => the coin who the character collects
    */
   playSoundPickCoin(coin: any) {
      coin.pick_coin.volume = 0.1;
      coin.pick_coin.play();
   }

   /**
    * function play the damage sound for the enemy
    *
    * @param enemy => the enemy who become a damage
    */
   playDamageEnemySound(enemy: { damage_enemie: { volume: number; play: () => void } }) {
      enemy.damage_enemie.volume = 0.2;
      enemy.damage_enemie.play();
   }

   /**
    * function play the damage sound for the endboss
    *
    * @param endboss => the endboss who become a damage
    */
   playDamageEndbossSound(endboss: { damage_enemie: { volume: number; play: () => void } }) {
      endboss.damage_enemie.volume = 0.2;
      endboss.damage_enemie.play();
   }

   /**
    * funstion remove the dead enemy from the array and is no longer displayed
    *
    * @param deadEnemy => the object where is to remove
    */
   removeDeadEnemyFromArray(deadEnemy: DeadChicken) {
      if (this.deadEnemies.includes(deadEnemy)) {
         this.deadEnemies.splice(this.deadEnemies.indexOf(deadEnemy, 0), 1);
      }
   }

   /**
    * function update the statusbar  coin
    */
   updateStatusBarCoin() {
      this.coinsPercentage = (100 / this.coinsInWorld) * this.character.coins;
      this.statusBarCoin.setPercentage(this.coinsPercentage);
   }

   /**
    * function update the statusbar bottle
    */
   updateStatusBarBottle() {
      this.bottlesPercentage = (100 / this.bottlesInWorld) * this.character.bottles;
      this.statusBarBottle.setPercentage(this.bottlesPercentage);
   }

   /**
    * function started the hit function and update the percentage of the character
    */
   hitCharacterAndUpdateHitPersentage() {
      this.character.hit();
      this.statusBarHp.setPercentage(this.character.energy);
   }

   /**
    * function replaced the throwable bottle by a broken bottle
    *
    * @param throwableBottle => the coordinate where the throwable bottle is broken
    */
   createNewSplashBottle(throwableBottle: { x: number; y: number }) {
      let splashBottle = new SplashBottleObject(throwableBottle.x, throwableBottle.y + 25);
      this.bottlesSplash.push(splashBottle);
      if (this.throwableObject.includes(throwableBottle)) {
         this.throwableObject.splice(this.throwableObject.indexOf(throwableBottle, 0), 1);
      }
   }

   /**
    * function=> chech is the coordinate of enemy and throwable bottle is the same or not
    *
    * @param throwableBottle => coordinate of thr throwable bottle
    * @param enemy => coordinate of the enmy
    * @returns true whe the coordinate of enemy and throwable bottle is the same, when not => false
    */
   coordinatesBottleColissionEnemyColission(
      throwableBottle: { x: number; width: any; y: number; height: any },
      enemy: { x: number; width: any; y: number; height: any }
   ) {
      return (
         throwableBottle.x + throwableBottle.width >= enemy.x &&
         throwableBottle.x <= enemy.x + enemy.width &&
         throwableBottle.y + throwableBottle.height >= enemy.y &&
         throwableBottle.y <= enemy.y + enemy.height
      );
   }

   /**
    * function=> chech is the coordinate of endboss and throwable bottle is the same or not
    *
    * @param throwableBottle => coordinate of thr throwable bottle
    * @param endboss => coordinate of the endboss
    * @returns true whe the coordinate of endboss and throwable bottle is the same, when not => false
    */
   coordinatesBottleColissionEndbossColission(
      throwableBottle: { x: number; width: any; y: number; height: any },
      endboss: { x: number; width: any; y: number; height: any }
   ) {
      return (
         throwableBottle.x + throwableBottle.width - 50 >= endboss.x &&
         throwableBottle.x <= endboss.x + endboss.width &&
         throwableBottle.y + throwableBottle.height >= endboss.y &&
         throwableBottle.y <= endboss.y + endboss.height
      );
   }

   /**
    *function update the statusbar of the endboss
    *
    * @param endboss => the endboss whose status bar should be updated
    */
   updateEndbossEnergyAndStatusBarEndboss(endboss: { energy: number }) {
      endboss.energy -= 20;
      this.statusBarEndboss.setPercentage(endboss.energy);
   }

   /**
    * function replaye a enemy to a dead enemy
    *
    * @param enemy coordinate of the enemy
    * @returns an dead enemy object
    */
   createDeadChickenAndRemoveLiveChicken(enemy: { x: number; y: number }) {
      let deadEnemy = new DeadChicken(enemy.x, enemy.y);
      this.deadEnemies.push(deadEnemy);

      if (this.level.enemies.includes(enemy)) {
         this.level.enemies.splice(this.level.enemies.indexOf(enemy, 0), 1);
      }
      return deadEnemy;
   }

   /**
    * function replaye a endboss to a dead endboss
    *
    * @param endboss coordinate of the endboss
    * @returns an endboss enemy object
    */
   createDeadEndbossAndRemoveLiveChicken(endboss: { x: number; y: number }) {
      let deadEnemy = new DeadEndboss(endboss.x, endboss.y + 80);
      this.deadEnemies.push(deadEnemy);
      if (this.level.endboss.includes(endboss)) {
         this.level.endboss.splice(this.level.enemies.indexOf(endboss, 0), 1);
      }
   }

   /**
    * function play the final animation and music
    */
   playEndWinAnimation() {
      stopAllIntervals();
      closeFullscreen();
      this.background_sound.pause();
      this.win_sound.volume = 0.1;
      this.win_sound.play();
      endScreen.classList.remove("endscreen-hidden");
      winContain.classList.remove("endscreen-hidden");
      startSide.style.display = "none";
   }

   /**
    * function play animation and sound when endboss hit
    */
   bottleCollisionWithEndbossTrue(endboss: any, throwableBottle: any) {
      if (this.coordinatesBottleColissionEndbossColission(throwableBottle, endboss)) {
         this.playDamageEndbossSound(endboss);
         this.createNewSplashBottle(throwableBottle);
         endboss.hitEndboss = true;
         this.removeSplashBottleArray();
         this.updateEndbossEnergyAndStatusBarEndboss(endboss);
         this.endAnimationCharacterWin(endboss);
      }
   }

   /**
    * play endanimation when player win
    */
   endAnimationCharacterWin(endboss: any) {
      if (endboss.energy == 0) {
         this.createDeadEndbossAndRemoveLiveChicken(endboss);
         setInterval(() => this.playEndWinAnimation(), 1000);
      }
   }
}
