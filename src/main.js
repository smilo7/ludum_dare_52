const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;


let barPerson;
let surgeon;

function setup() {
  // put setup code here
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  frameRate(30);

  barPerson = new BarPerson(SCREEN_WIDTH * 1/4, SCREEN_HEIGHT * 1/3, 50, {r:255, g:0, b:0})
  surgeon = new Surgeon(SCREEN_WIDTH * 3/4, SCREEN_HEIGHT * 1/3, 50, {r:0, g:255, b:0})
 
}
  
function draw() {
  // put drawing code here
  background(200);

  updatePlayers();
}

function updatePlayers() {
  barPerson.display();
  barPerson.move();

  surgeon.display();
  surgeon.move()
}