class Player {
    constructor(x, y, width, height, image) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = image
      this.allowLeft = true;
      this.allowRight = true;
      this.minigameState = false;
    }
  
    display() {
      image(this.image, this.x, this.y, this.width, this.height);
    }

    collisionCheck(x, y, radius) {
      let d = dist(x, y, this.x, this.y);
      if (radius + (this.width * 0.7 * 0.5) > d) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class BarPerson extends Player {
    move() {
      // check if the player is allowed to move      
      if (keyIsDown(65) && this.allowLeft){
        this.x -= 5;
      } else if (keyIsDown(68) && this.allowRight){
        this.x += 5;
      }
    }
  }
  
  
  class Surgeon extends Player {
    constructor(x, y, width, height, image){
      super(x, y, width, height, image)
      this.forcep = null;
    }
    move() {
     
      if (keyIsDown(74) && this.allowLeft){
        this.x -= 5;
      } else if (keyIsDown(76) && this.allowRight){
        this.x += 5;
      }
    }

    initMinigame(){
      this.forcep = new Forcep(this.x, this.y, forcepImage);
      this.minigameState = true;
    }

    drawMinigame(){
      this.forcep.display();
    }

    endMinigame(){
      this.forcep = null;
      this.minigameState = false;
    }



    operate(){
        kidneyCount++;
    }

  }


  function updatePlayers() {

    // check if player is in minigame state

    if (surgeon.minigameState){
      // console.log("minigrame time")
      surgeon.drawMinigame();
    } else {
      surgeon.display();
      surgeon.move();
    }
    

    barPerson.display();
    barPerson.move()
  }
  