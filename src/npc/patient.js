class Patient extends NPC {
  constructor(x, y, diameter, colour){
    super(x, y, diameter, colour)
    this.kidneys = 2;
  }

  display() {
    fill(this.colour.r, this.colour.g, this.colour.b); 
    circle(this.x, this.y, this.diameter);
  }

  removeKidney(amount=1){
    if(this.kidneys !== 0){
      this.kidneys -= amount;
    }
    // console.log("kidney being removed", this.kidneys)
    kidneyCount++;
  }

  initMinigame(){

  }
}

function displayPatients(){
  if (patients.length !== 0){
    for (let i = 0; i<patients.length; i++){
      // only update the patient at the position in their bed if they exist!
      if (patients[i] !== null){
        patients[i].display();
      }
    }
  }
}

function chooseRandomPatientPos(i){

    let y = SCREEN_HEIGHT * 1/2
  
    const rightScreenXPositions = [
      [9/16 * SCREEN_WIDTH, y],
      [11/16 * SCREEN_WIDTH, y],
      [13/16 * SCREEN_WIDTH, y],
      [15/16 * SCREEN_WIDTH, y],
    ] 
    
    return rightScreenXPositions[i]
  }
  
  function spawnPatient(){
    // generate random int to get coordinate position
    // and the position in the patient array
    const randomPositionInt = int(random(0, patients.length));
    const coords = chooseRandomPatientPos(randomPositionInt);
    if (patients[randomPositionInt] === null){
      patients[randomPositionInt] = new Patient(coords[0], coords[1], 40, {r:20, g:41, b:160});
    }

    // console.log(patients)
}