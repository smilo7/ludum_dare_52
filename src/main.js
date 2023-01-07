const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;


let barPerson;
let surgeon;
let dividerWall;
let testCustomer;

function setup() {
  // put setup code here
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  frameRate(30);

  barPerson = new BarPerson(SCREEN_WIDTH * 1/4, SCREEN_HEIGHT * 1/3, 50, {r:255, g:0, b:0})
  surgeon = new Surgeon(SCREEN_WIDTH * 3/4, SCREEN_HEIGHT * 1/3, 50, {r:0, g:255, b:0})
  
  dividerWall = new Wall(SCREEN_WIDTH * 1/2, 0, SCREEN_WIDTH * 1/100, SCREEN_HEIGHT);
  testCustomer = new Customer(SCREEN_WIDTH, SCREEN_HEIGHT * 1/2, 40, {r:125, g:41, b:171})
}
  
function draw() {
  // put drawing code here
  background(200);
  
  testCustomer.display()
  
  dividerWall.display()

  updatePlayers();
}

function updatePlayers() {
  barPerson.display();
  barPerson.move();
  surgeon.display();
  surgeon.move()
}
