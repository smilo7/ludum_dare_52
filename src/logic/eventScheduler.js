function eventScheduler (npcs) {
    const timer = 0;

    if (frameCount % FPS) {
        timer++;
        for (const i = 0; i < npcs.length; i++){
            npcs[i].spawn()
        }
    }
}

function scheduler () {
    if( frameCount % FPS === 0){ 
      timer++
    }
    textSize(32);
    fill(0, 102, 153);
    text(timer, 50, 50);
  
    if (timer === 5){
      timer = 0 // reset timer
      spawnCustomer()
    }
  }
  