
class Forcep {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image
        this.allowUp = true;
        this.allowDown = true;
        this.width = 200;
        this.height = 200;
    }

    // collisionCheck(x, y, radius) {
    //     let d = dist(x, y, this.x, this.y);
    //     if (radius + (this.width * 0.7 * 0.5) > d) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    
    display() {
        image(this.image, this.x, this.y, this.width, this.height);
    }
}


class Kidney {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image
  }
}