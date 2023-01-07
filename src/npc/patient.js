class Patient extends NPC {
  
  display() {
    fill(this.colour.r, this.colour.g, this.colour.b); 
    circle(this.x, this.y, this.diameter);
  }
}

function displayPatients(){
  if (patients.length !== 0){
    for (let i = 0; i<patients.length; i++){
      // only update the customer at the position at the bar if they exist!
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

    console.log(patients)
}