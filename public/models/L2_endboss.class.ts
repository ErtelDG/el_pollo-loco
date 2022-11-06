class Endboss extends MovableObject {
   height: number = 300;
   width: number = 200;
   y: number = 80;
   health: number = 3;
   endbossMoveLeft = false;
   endbossAlert = false;
   endbossAttack = false;
   walking_enemie_sound = new Audio("audio/chicken.mp3");

   IMAGES_WALKING = [
      "img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png",
   ];

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

   IMAGES_HURT = ["img/4_enemie_boss_chicken/4_hurt/G21.png", "img/4_enemie_boss_chicken/4_hurt/G22.png", "img/4_enemie_boss_chicken/4_hurt/G23.png"];

   IMAGES_DEAD = ["img/4_enemie_boss_chicken/5_dead/G24.png", "img/4_enemie_boss_chicken/5_dead/G25.png", "img/4_enemie_boss_chicken/5_dead/G26.png"];

   constructor() {
      super();
      this.loadImage(this.IMAGES_ALERT[0]);
      this.loadImagesWalking(this.IMAGES_ALERT);
      this.x = 7000;
      this.animate();
      this.health = 3;
   }
   animate() {
    
       setInterval(() => {
          this.animationObjects(this.IMAGES_ALERT, this.imageCache);
       }, 120);
   }
}
