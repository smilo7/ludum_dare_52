class Customer extends NPC {

    display() {
        fill(this.colour.r, this.colour.g, this.colour.b); 

        // let positions = [1, 3, 5, 7];
        // let position = random(positions);

        circle(this.x, this.y, this.diameter);
      }
  }

function updateCustomers(){
    if (customers.length !== 0){
      for (let i = 0; i<customers.length; i++){
        customers[i].display();
      }
    }
  }

function chooseRandomCustomerPos(){

    let y = SCREEN_HEIGHT * 1/2
  
    const leftScreenXPositions = [
      [1/16 * SCREEN_WIDTH, y],
      [3/16 * SCREEN_WIDTH, y],
      [5/16 * SCREEN_WIDTH, y],
      [7/16 * SCREEN_WIDTH, y],
    ]
    
    return random(Object.values(leftScreenXPositions))
  }

function spawnCustomer(){
    const coords = chooseRandomCustomerPos();
    console.log(coords)
  
    customers.push(new Customer(coords[0], coords[1], 40, {r:125, g:41, b:171}))
}

