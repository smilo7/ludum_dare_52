class Wall {
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }
    display() {
        rectMode(CENTER);
        fill(165,42,42);
        rect(this.x, this.y, this.width, this.height);
    }
}

function wallCollisionCheck(){
    if (barPerson.collisionCheck(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 0) == true){
      barPerson.allowRight = false;
    } else {
      barPerson.allowRight = true;
    }
    if (barPerson.collisionCheck(0, SCREEN_HEIGHT * 1/3, 0) == true){
      barPerson.allowLeft = false;
    } else {
      barPerson.allowLeft = true;
    }

  
    if (surgeon.collisionCheck(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 0) == true){
      surgeon.allowLeft =  false;
    } else {
      surgeon.allowLeft = true;
    }
    if (surgeon.collisionCheck(SCREEN_WIDTH, SCREEN_HEIGHT * 1/3, 0) == true){
      surgeon.allowRight = false;
    } else {
      surgeon.allowRight = true;
    }

  }