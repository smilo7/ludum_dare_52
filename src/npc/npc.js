//Make basic npc class and extend behaviour
//Cus or Pat
class NPC {
    constructor(x, y, diameter, colour) {
      // this.screen_width = screen_width;
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.colour = colour; // {r:255, g:0, b:0}
      this.timeTillRemoval = 3;
    }
  }
