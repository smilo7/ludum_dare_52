const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;
const FPS = 30;

let timer = 0;

let barPerson;
let surgeon;

let dividerWall;

let customers = [null, null, null, null];
let patients = [null, null, null, null];


let playerImage;
function preload() {
  surgeonImage = loadImage('assets/surgeon.png');
  barPersonImage = loadImage('assets/barman.png');
}

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  noSmooth();
  imageMode(CENTER);
  frameRate(FPS);

  const playerWidth= 100;
  const playerHeight = 100;

  barPerson = new BarPerson(SCREEN_WIDTH * 1/4, SCREEN_HEIGHT * 1/3, playerWidth, playerHeight, barPersonImage)
  surgeon = new Surgeon(SCREEN_WIDTH * 3/4, SCREEN_HEIGHT * 1/3, playerWidth, playerHeight, surgeonImage)
  
  dividerWall = new Wall(SCREEN_WIDTH * 1/2, 0, SCREEN_WIDTH * 1/100, SCREEN_HEIGHT);
}
  
function draw() {
  // put drawing code here
  background(200);
  
  dividerWall.display();

  updatePlayers();

  displayCustomers();

  displayPatients();
  
  scheduleNPCs();

  //collision with wall
  circle(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 50);
  if (barPerson.collisionCheck(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 25) == true){
    circle(10,10,10,10);
  }

}
