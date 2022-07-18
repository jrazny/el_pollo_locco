class DrawableObject {
    
    x = 120;
    y  = 200;
    height = 250;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;



    loadImagePath(path) {
        this.img = new Image(); // this.image = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


     /**
     * 
     * @param {Array} arr - ['./img/image1.png','./img/image2.png', ... ]
     * 
     */

      loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

}