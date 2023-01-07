//Make basic npc class and extend behaviour
//Cus or Pat
class NPC {
    constructor(screen_width, height, diameter, colour) {
      this.screen_width = screen_width;
      this.y = height;
      this.diameter = diameter;
      this.colour = colour; // {r:255, g:0, b:0}
    }
  }

class Customer extends NPC {

    display() {
        fill(this.colour.r, this.colour.g, this.colour.b); 
        let positions = [1, 3, 5, 7];
        let position = random(positions);
        circle(position/16 * this.screen_width, this.y, this.diameter);
      }
  }

class Patient extends NPC {
  
    display() {
        fill(this.colour.r, this.colour.g, this.colour.b); 
        let positions = [9, 11, 13,15];
        let position = random(positions);
        circle(position/16 * this.screen_width, this.y, this.diameter);
      }
  }
  
