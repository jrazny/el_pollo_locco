class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Collision with Character, enegy', this.character.energy);
                }
            });
        }, 200);
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // das ganze canvas wird gelöscht - man hat ganz kurz nur eine schwarze Fläsche
        // es werden dann sehr schnell folgende Objecte hinzugefügt: Reihenfolge ist wichtig: 1. backgroundObjects damit es im htg liegt 
        
        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects); // backgroundObjects wird hinzugefügt
        this.addToMap(this.character); // character wird hinzugefügt
        this.addObjectsToMap(this.level.clouds); // clouds wird hinzugefügt
        this.addObjectsToMap(this.level.enemies); // enemies wird hinzugefügt

        this.ctx.translate(-this.camera_x, 0);
                
    
        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        
        if (mo.otherDirection) {
           this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}