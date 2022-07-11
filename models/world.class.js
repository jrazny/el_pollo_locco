class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()

    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('../img/5_background/layers/air.png', 0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/full.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0)
    ];

    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // das ganze canvas wird gelöscht - man hat ganz kurz nur eine schwarze Fläsche
        // es werden dann sehr schnell folgende Objecte hinzugefügt: Reihenfolge ist wichtig: 1. backgroundObjects damit es im htg liegt 
        
        this.addObjectsToMap(this.backgroundObjects); // backgroundObjects wird hinzugefügt
        this.addToMap(this.character); // character wird hinzugefügt
        this.addObjectsToMap(this.clouds); // clouds wird hinzugefügt
        this.addObjectsToMap(this.enemies); // enemies wird hinzugefügt

    
    
        
    
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }


}