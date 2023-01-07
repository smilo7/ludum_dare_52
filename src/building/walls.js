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
    if (barPerson.collisionCheck(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 25) == true){
      barPerson.allowMovement = false;
    } else {
      barPerson.allowMovement = true;
    }
  
    if (surgeon.collisionCheck(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 25) == true){
      surgeon.allowMovement =  false;
    } else {
      surgeon.allowMovement = true;
    }
  }