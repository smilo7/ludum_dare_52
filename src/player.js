class Player {
    constructor(x, y, diameter, colour) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.colour = colour; // {r:255, g:0, b:0}
    }
  
    display() {
      fill(this.colour.r, this.colour.g, this.colour.b);  // Set line drawing color to white
      circle(this.x, this.y, this.diameter)
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