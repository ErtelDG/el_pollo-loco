class Endboss extends MovableObject {
   height: number = 300;
   width: number = 200;
   y: number = 80;
   energy: number = 100;
   endbossMoveLeft = false;
   endbossAlert = true;
   endbossAttack = false;
   hitEndboss = false;
   characterNearbyEndboss = false;

   walking_enemie_sound = new Audio("audio/chicken.mp3");
   damage_enemie = new Audio("audio/chicken_damage.mp3");

   IMAGES_WALK = [
      "img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png",
   ];
   imageCacheWalk: any = [];

   IMAGES_ALERT = [
      "img/4_enemie_boss_chicken/2_alert/G5.png",
      "img/4_enemie_boss_chicken/2_alert/G6.png",
      "img/4_enemie_boss_chicken/2_alert/G7.png",
      "img/4_enemie_boss_chicken/2_alert/G8.png",
      "img/4_enemie_boss_chicken/2_alert/G9.png",
      "img/4_enemie_boss_chicken/2_alert/G10.png",
      "img/4_enemie_boss_chicken/2_alert/G11.png",
      "img/4_enemie_boss_chicken/2_alert/G12.png",
   ];
   imageCacheAlert: any = [];

   IMAGES_ATTACK = [
      "img/4_enemie_boss_chicken/3_attack/G13.png",
      "img/4_enemie_boss_chicken/3_attack/G14.png",
      "img/4_enemie_boss_chicken/3_attack/G15.png",
      "img/4_enemie_boss_chicken/3_attack/G16.png",
      "img/4_enemie_boss_chicken/3_attack/G17.png",
      "img/4_enemie_boss_chicken/3_attack/G18.png",
      "img/4_enemie_boss_chicken/3_attack/G19.png",
      "img/4_enemie_boss_chicken/3_attack/G20.png",
   ];
   imageCacheAttack: any = [];

   IMAGES_HURT = ["img/4_enemie_boss_chicken/4_hurt/G21.png", "img/4_enemie_boss_chicken/4_hurt/G22.png", "img/4_enemie_boss_chicken/4_hurt/G23.png"];
   imageCacheHurt: any = [];

   constructor() {
      super();

      this.loadImage(this.IMAGES_ALERT[0]);
      this.loadImagesAlert(this.IMAGES_ALERT);
      this.loadImagesWalking(this.IMAGES_WALK);
      this.loadImagesAttack(this.IMAGES_ATTACK);

      this.loadImagesHurt(this.IMAGES_HURT);
      this.x = 7000;
      this.animate();
      this.energy = 100;
      this.intervall();
   }

   /**
    * function to correct animate => object
    */
   animate() {
      setInterval(() => {
         if (this.characterNearTheEndboss()) {
            if (this.hitEndbossTrue()) {
               this.animationEndbossHurt();
            } else {
               this.startAnimationEndbossAlertMoveLeftOrAttack();
            }
         }
      }, 100);
   }

   /**
    * set the endboss action
    */
   intervall() {
      this.setEndbossMoveLeft();
      this.setEndbossAttack();
      this.setEndbossAlert();
   }

   loadImagesAlert(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheAlert.push(img);
      });
   }

   loadImagesWalking(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheWalk.push(img);
      });
   }

   loadImagesAttack(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheAttack.push(img);
      });
   }

   loadImagesHurt(arr: any[]) {
      arr.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imageCacheHurt.push(img);
      });
   }

   isWalking() {
      let timepassed = (new Date().getTime() - this.lastHit) / 1000;
      return timepassed < 1;
   }

   isAttack() {
      let timepassed = (new Date().getTime() - this.lastHit) / 1000;
      return timepassed < 1;
   }

   characterNearTheEndboss() {
      return this.characterNearbyEndboss;
   }

   hitEndbossTrue() {
      return this.hitEndboss;
   }

   animationEndbossHurt() {
      this.animationObjects(this.IMAGES_HURT, this.imageCacheHurt);
      setTimeout(() => {
         this.hitEndboss = false;
      }, 1000);
   }

   endbossAlertAnimationTrue() {
      return this.endbossAlert;
   }

   animationEndbossAlert() {
      return this.animationObjects(this.IMAGES_ALERT, this.imageCacheAlert);
   }

   endbossMoveLeftTrue() {
      return this.endbossMoveLeft;
   }

   animationEndbossMoveLeft() {
      this.animationObjects(this.IMAGES_WALK, this.imageCacheWalk);
      this.x -= 12;
   }

   endbossAttackTrue() {
      return this.endbossAttack;
   }
   animationEndbossAttack() {
      return this.animationObjects(this.IMAGES_ATTACK, this.imageCacheAttack);
   }

   setEndbossMoveLeft() {
      setInterval(() => {
         this.endbossAlert = false;
         this.endbossMoveLeft = true;
         this.endbossAttack = false;
      }, 2000);
   }

   setEndbossAttack() {
      setInterval(() => {
         this.endbossAlert = false;
         this.endbossMoveLeft = false;
         this.endbossAttack = true;
      }, 8000);
   }

   setEndbossAlert() {
      setInterval(() => {
         this.endbossAttack = false;
         this.endbossMoveLeft = false;
         this.endbossAlert = true;
      }, 12000);
   }

   startAnimationEndbossAlertMoveLeftOrAttack() {
      if (this.endbossAlertAnimationTrue()) {
         this.animationEndbossAlert();
      } else if (this.endbossMoveLeftTrue()) {
         this.animationEndbossMoveLeft();
      } else if (this.endbossAttackTrue()) {
         this.animationEndbossAttack();
      } else {
      }
   }
}
