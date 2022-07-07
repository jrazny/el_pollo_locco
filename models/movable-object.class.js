class MovableObject {
    x = 120;
    y  = 250;
    img;
    height = 200;
    width = 200;

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

