function scheduleNPCs () {

    // Every second
    if( frameCount % FPS === 0){ 
      timer++;
      // decrease time till removal for each NPC and remove any that are "expired"
      for (let i = 0; i<customers.length; i++){
        if (customers[i] !== null){
          customers[i].timeTillRemoval--;
          if (customers[i].timeTillRemoval === 0){
            customers[i] = null;
          } 
        }
      }

      for (let i = 0; i<patients.length; i++){
        if (patients[i] !== null){
          patients[i].timeTillRemoval--;
          if (patients[i].timeTillRemoval === 0){
            patients[i] = null;
          } 
        }
      }

    }

    // text to display seconds gone by
    textSize(32);
    fill(0, 102, 153);
    text(timer, 50, 50);
    
    // every 5 seconds, put a new customer in postions
    if (timer === 1){
      timer = 0 // reset timer
      spawnCustomer()
      spawnPatient();
    }



  }
  