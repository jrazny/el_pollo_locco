class MovableObject {
    x = 120;
    y  = 200;
    img;
    height = 250;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImagePath(path) {
        this.img = new Image(); // this.image = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['../img/image1.png','../img/image2.png', ... ]
     * 
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);  // 60fps
    }
}

