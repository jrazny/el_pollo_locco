class ThrowableObject extends MovableObject{

    constructor(x, y) {
        super().loadImagePath('./img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.width = 110;
        this.height = 110;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval( () => {
            this.x += 10;
        }, 25);
    }

}