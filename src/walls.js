class Wall {
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }
    display() {
        fill(165,42,42);
        rect(this.x, this.y, this.width, this.height);
    }
}

