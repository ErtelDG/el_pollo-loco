class World {
   character = new Character();
   statusBar = new StatusBar();
   ctx: any;
   level = level1;

   canvas;

   keyboard;
   camera_x = 0;

   constructor(canvas: any, keyboard: any) {
      (this.ctx = canvas.getContext("2d")), (this.canvas = canvas);
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
               this.statusBar.setPercentage(this.character.energy);
               console.log("COLLISION,", this.character.energy);
            }
         });
      }, 200);
   }

   setWorld() {
      this.character.world = this;
   }

   draw() {
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

         this.ctx.translate(this.camera_x, 0);
         this.addObjectsToMap(this.level.backgroundObjects);

         this.addToMap(this.statusBar);

         this.addToMap(this.character);
         this.addObjectsToMap(this.level.clouds);
         this.addObjectsToMap(this.level.enemies);
         this.addObjectsToMap(this.level.coins);

         this.ctx.translate(-this.camera_x, 0);

         //draw wird immer wieder
         let self = this;
         requestAnimationFrame(function () {
            self.draw();
         });
      }
   }

   addToMap(character: any) {
      if (character.otherDirection) {
         this.flipImage(character);
      }
      if (this.ctx != null) {
         this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
         this.drawRectangle(this.character.x, this.character.y, this.character.width, this.character.height);
      }

      if (character.otherDirection) {
         this.ctx.restore();
         character.x = character.x * -1;
      }
   }

   addObjectsToMap(obj: any) {
      obj.forEach((obj_x: Chicken | Cloud | BackgroundObject | Coin) => {
         this.drawElements(obj_x);
         this.drawRectangle(obj_x.x, obj_x.y, obj_x.width, obj_x.height);
      });
   }

   flipImage(character: Character) {
      this.ctx.save();
      this.ctx.translate(character.width, 0);
      this.ctx.scale(-1, 1);
      character.x = character.x * -1;
   }

   drawRectangle(x: any, y: any, width: any, height: any) {
      this.ctx.beginPath();
      this.ctx.lineWidth = "5";
      this.ctx.strokeStyle = "blue";
      this.ctx.rect(x, y, width, height);
      this.ctx.stroke();
   }

   drawElements(objectToDraw: Chicken | Cloud | BackgroundObject | Coin | StatusBar) {
      if (this.ctx != null) {
         this.ctx.drawImage(objectToDraw.img, objectToDraw.x, objectToDraw.y, objectToDraw.width, objectToDraw.height);
      }
   }
}
