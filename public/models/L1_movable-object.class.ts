class MovableObject extends DrawableObject {
   constructor() {
      super();
   }

   speed = 0.15;
   otherDirection = false;
   offsetY: number = this.y + this.height;
   speedY = 0;
   bottles = 0;
   coins = 0;
   energy = 100;
   acceleration = 3;
   lastHit = 0;

   applyGravity() {
      setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
         }
      }, 50);
   }

   isAboveGround() {
      if (this instanceof ThrowableObject) {
         return true;
      } else {
         return this.y < 150;
      }
   }

   moveRight() {
      this.x += this.speed;
   }

   moveLeft() {
      this.x -= this.speed;
   }

   animationObjects(images: string | any[], Cach: any[]) {
      let i = this.currentImage % images.length;
      this.img = Cach[i];
      this.currentImage++;
   }

   jump() {
      this.speedY = 32;
   }

   // Bessere Formel zur Kollisionsberechnung (Genauer)
   // isColliding(mo: any) {
   //    return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
   // }

   isColliding(obj: any) {
      return (
         this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
         this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
         this.y + this.height >= obj.y + 50 &&
         this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
         //<= obj.y + obj.height && obj.onCollisionCourse  ==  + this.height
      ); // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
   }

   hit() {
      this.energy -= 1;
      if (this.energy < 0) {
         this.energy = 0;
         world.character.damage_character.pause();
         world.background_sound.pause();
         setInterval(() => {
            stopAllIntervals();

            document.getElementById("end-screen")?.classList.remove("endscreen-hidden");
            document.getElementById("game-over-container")?.classList.remove("endscreen-hidden");
            let startSide = document.getElementById("startSide");
            if (startSide != null) {
               startSide.style.display = "none";
            }
         }, 1500);
      } else {
         this.lastHit = new Date().getTime();
      }
   }

   collectsCoin() {
      this.coins += 1;
   }

   collectBottle() {
      this.bottles += 1;
   }

   isHurt() {
      let timepassed = (new Date().getTime() - this.lastHit) / 1000;
      return timepassed < 1;
   }

   isDead() {
      return this.energy == 0;
   }
}
