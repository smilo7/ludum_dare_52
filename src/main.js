const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;


let barPerson;
let surgeon;
let dividerWall;
let testCustomer;

let playerImage;
function preload() {
  playerImage = loadImage('assets/surgeon.png');
}

function setup() {
  // put setup code here
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  noSmooth();
  imageMode(CENTER);
  frameRate(30);

  barPerson = new BarPerson(SCREEN_WIDTH * 1/4, SCREEN_HEIGHT * 1/3, 100, 100, playerImage)
  surgeon = new Surgeon(SCREEN_WIDTH * 3/4, SCREEN_HEIGHT * 1/3, 100, 100, playerImage)
  
  dividerWall = new Wall(SCREEN_WIDTH * 1/2, 0, SCREEN_WIDTH * 1/100, SCREEN_HEIGHT);
  testCustomer = new Customer(SCREEN_WIDTH, SCREEN_HEIGHT * 1/2, 40, {r:125, g:41, b:171})
  testPatient = new Patient(SCREEN_WIDTH, SCREEN_HEIGHT * 1/2, 40, {r:157, g:41, b:120})
}
  
function draw() {
  // put drawing code here
  background(200);
  
  //testCustomer.display();

  //testPatient.display();
  
  dividerWall.display();

  updatePlayers();
  
}




function updatePlayers() {
  barPerson.display();
  barPerson.move();
  surgeon.display();
  surgeon.move()
}
