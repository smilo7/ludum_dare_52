class Customer extends NPC {
    constructor(x, y, diameter, colour){
      super(x, y, diameter, colour)
      this.kidneyPies = 0;
    }

    display() {
      fill(this.colour.r, this.colour.g, this.colour.b); 
      circle(this.x, this.y, this.diameter);
    }

    getGivenPie(amount=1){
      this.kidneyPies += amount;
      // console.log("kidney being removed", this.kidneys)
      kidneyCount--;
    }
  }

function displayCustomers(){
    if (customers.length !== 0){
      for (let i = 0; i<customers.length; i++){
        // only update the customer at the position at the bar if they exist!
        if (customers[i] !== null){
          customers[i].display();
        }
      }
    }
  }

function chooseRandomCustomerPos(i){

    let y = SCREEN_HEIGHT * 1/3
  
    const leftScreenXPositions = [
      [1/16 * SCREEN_WIDTH, y],
      [3/16 * SCREEN_WIDTH, y],
      [5/16 * SCREEN_WIDTH, y],
      [7/16 * SCREEN_WIDTH, y],
    ]
    
    return leftScreenXPositions[i]
  }

function spawnCustomer(){

    // generate random int to get coordinate position
    // and the position in the customer array
    const randomPositionInt = int(random(0, customers.length));
    const coords = chooseRandomCustomerPos(randomPositionInt);
    if (customers[randomPositionInt] === null){
      customers[randomPositionInt] = new Customer(coords[0], coords[1], 40, {r:125, g:41, b:171});
    }

    // console.log(customers)
}

