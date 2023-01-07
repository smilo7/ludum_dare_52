const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;


function setup() {
  // put setup code here
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  frameRate(30);
}
  
function draw() {
  // put drawing code here
  background(200);

  const player1 = new Player(SCREEN_WIDTH * 1/4, SCREEN_HEIGHT * 1/3, 50, {r:255, g:0, b:0})
  const player2 = new Player(SCREEN_WIDTH * 3/4, SCREEN_HEIGHT * 1/3, 50, {r:0, g:255, b:0})
  player1.display()
  player2.display()
}
  
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

