class World {
   character = new Character();
   enemies = level.enemies;
   clouds = level.clouds;
   backgrounds = level.backgroundObjects;
   canvas;
   ctx;
   keyboard;
   camera_x = 0;

   constructor(canvas: any, keyboard: any) {
       (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
      this.keyboard = keyboard;
      this.draw();
      this.setWorld();
   }

   setWorld() {
      this.character.world = this;
   }

   draw() {
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
         this.ctx.translate(this.camera_x, 0);
         this.addObjectsToMap(this.backgrounds);
         this.addObjectsToMap(this.clouds);

         this.addCharacterToMap(this.character);
         this.addObjectsToMap(this.enemies);

         this.ctx.translate(-this.camera_x, 0);

         //draw wird immer wieder
         let self = this;
         requestAnimationFrame(function () {
            self.draw();
         });
      }
   }

   addCharacterToMap(character: Character) {
      if (character.otherDirection) {
         this.ctx.save();
         this.ctx.translate(character.width, 0);
         this.ctx.scale(-1, 1);
         character.x = character.x * -1;
      }
      if (this.ctx != null) {
         this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
      }
      if (character.otherDirection) {
         this.ctx.restore();
         character.x = character.x * -1;
      }
   }

   addObjectsToMap(obj: any) {
      obj.forEach((obj_x: Chicken | Cloud | BackgroundObject) => {
         this.drawImage(obj_x);
      });
   }

   drawImage(objectToDraw: Chicken | Cloud | BackgroundObject) {
      if (this.ctx != null) {
         this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
      }
   }
}
