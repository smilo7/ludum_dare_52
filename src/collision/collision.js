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