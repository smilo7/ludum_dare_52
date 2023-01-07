function chooseRandomPatientPos(){

    let y = SCREEN_HEIGHT * 1/2
  
    const leftScreenXPositions = [
      [9/16 * SCREEN_WIDTH, y],
      [11/16 * SCREEN_WIDTH, y],
      [13/16 * SCREEN_WIDTH, y],
      [15/16 * SCREEN_WIDTH, y],
    ] 
    
    return random(Object.values(leftScreenXPositions))
  }
  
  