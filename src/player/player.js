class Player {
    constructor(x, y, width, height, image) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = image
    }
  
    display() {
      image(this.image, this.x, this.y, this.width, this.height);
    }
  
   
  }
  
  class BarPerson extends Player {
      move() {
      if (keyIsDown(65)){
        this.x -= 5;
      } else if (keyIsDown(68)){
        this.x += 5;
      }
    }
  }
  
  
  class Surgeon extends Player {
    move() {
      if (keyIsDown(74)){
        this.x -= 5;
      } else if (keyIsDown(76)){
        this.x += 5;
      }
    }
  }


  function updatePlayers() {

    barPerson.display();
    barPerson.move();

    surgeon.display();
    surgeon.move()
  }
  