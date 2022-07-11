class MovableObject {
    x = 120;
    y  = 200;
    img;
    height = 250;
    width = 150;

    loadImagePath(path) {
        this.img = new Image();
        this.img.src = path
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving left');
    }
}

