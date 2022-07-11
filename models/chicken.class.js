class Chicken extends MovableObject {
    height = 250;
    width = 250;
    constructor() {
        super().loadImagePath('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500;
    }

}