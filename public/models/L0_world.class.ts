class World {
   character = new Character();
   statusBar = new StatusBar();
   level = level1;

   canvas;

   keyboard;
   camera_x = 0;

   constructor(canvas: any, keyboard: any) {
      (this.character.ctx = canvas.getContext("2d")), (this.canvas = canvas);
      this.keyboard = keyboard;
      this.draw();
      this.setWorld();
      this.checkCollisions();
   }

   checkCollisions() {
      setInterval(() => {
         this.level.enemies.forEach((enemy: any) => {
            if (this.character.isColliding(enemy)) {
               this.character.hit();
               console.log("COLLISION,", this.character.energy);
            }
         });
      }, 200);
   }

   setWorld() {
      this.character.world = this;
   }

   draw() {
      if (this.character.ctx != null) {
         this.character.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
         this.character.ctx.translate(this.camera_x, 0);
         this.addObjectsToMap(this.level.backgroundObjects);
         this.addObjectsToMap(this.level.clouds);
         this.addObjectsToMap(this.level.coins);
         this.addCharacterToMap(this.character);
         this.addObjectsToMap(this.level.enemies);
         

         this.character.ctx.translate(-this.camera_x, 0);

         //draw wird immer wieder
         let self = this;
         requestAnimationFrame(function () {
            self.draw();
         });
      }
   }

   addCharacterToMap(character: Character) {
      if (character.otherDirection) {
         this.flipImage(character);
      }
      if (this.character.ctx != null) {
         this.character.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
         this.character.drawRectangle(this.character.x, this.character.y, this.character.width, this.character.height);
      }

      if (character.otherDirection) {
         this.character.ctx.restore();
         character.x = character.x * -1;
      }
   }

   addObjectsToMap(obj: any) {
      obj.forEach((obj_x: Chicken | Cloud | BackgroundObject | Coin) => {
         this.character.draw(obj_x);
         this.character.drawRectangle(obj_x.x, obj_x.y, obj_x.width, obj_x.height);
      });
   }

   flipImage(character: Character) {
      this.character.ctx.save();
      this.character.ctx.translate(character.width, 0);
      this.character.ctx.scale(-1, 1);
      character.x = character.x * -1;
   }
}
