const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;
const FPS = 30;

let kidneyCount = 0;

let timer = 0;

let barPerson;
let surgeon;

let dividerWall;

let customers = [null, null, null, null];
let patients = [null, null, null, null];


function preload() {
  surgeonImage = loadImage('assets/surgeon.png');
  barPersonImage = loadImage('assets/barman.png');
  kidneyImage = loadImage('assets/kidney.png');
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
  
  dividerWall = new Wall(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/2, SCREEN_WIDTH * 1/100, SCREEN_HEIGHT);
}
  
function draw() {
  // put drawing code here
  background(200);
  
  dividerWall.display();

  displayCustomers();

  displayPatients();

  updatePlayers();
  
  scheduleNPCs();

  //collision with wall
  // circle(SCREEN_WIDTH * 1/2, SCREEN_HEIGHT * 1/3, 50);
  
  wallCollisionCheck();

  displayKidneyCount();

  checkSurgeonPatientCollision();
  checkBarPersonCustomerCollision();
}

function checkSurgeonPatientCollision(){
  for (let i =0; i < patients.length; i++){
    if (patients[i] !== null){
      
      if(surgeon.collisionCheck(patients[i].x, patients[i].y-50, 40)){

        if (keyIsDown(75)){

          patients[i].removeKidney();

          if (patients[i].kidneys <= 0){
            patients[i] = null;
          }
        }

      }

    }
  }
}

function checkBarPersonCustomerCollision(){
  for (let i =0; i < customers.length; i++){
    if (customers[i] !== null){
      
      if(barPerson.collisionCheck(customers[i].x, customers[i].y, 40)){
        console.log("collision with customer")
        
        if (keyIsDown(83)){

          customers[i].getGivenPie();

          if (customers[i].kidneyPies >= 2){
            customers[i] = null;
          }
        }

      }

    }
  }
}


function displayKidneyCount(){
  
  fill(100,100,100);
  rect(SCREEN_WIDTH/2, 35, 100, 50)

  image(kidneyImage,SCREEN_WIDTH/2, 35, 100, 100);

  textSize(32);
  fill(255,0,0);
  text(kidneyCount, SCREEN_WIDTH/2, 50);
}