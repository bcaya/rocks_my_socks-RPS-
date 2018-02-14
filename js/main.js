function startGame(e) {
  var choice = e.target.id
  console.log(choice)
  compChoice = Math.random()
  if (compChoice <0.34){
    compChoice = "rock";
  }
  else if(compChoice <=0.67){
    compChoice = "paper";
  }
  else{
    compChoice = "scissors"
    
  }
  console.log(compChoice)
  checkWin(choice, compChoice)
}


function checkWin(choice, compChoice){
 if (choice === compChoice) {
   return ("its a draw!")
   
   
   }
  if (choice === "rock"){
    if(compChoice === "scissors"){
      
      console.log("rock wins")
      
    }
  else{
    
    console.log("paper wins!")
     }
    }
    if(choice ==="paper"){
      if(compChoice === "rock"){
        console.log("paper wins!")
       
        
      }
    else{
      console.log("scissors win!")
      
      
    }
    }
    if(choice === "scissors"){
      if (compChoice === "paper"){
        console.log("scissors win!")
        
      }
    else{
      console.log("rock wins!")
      
    }
    }
  }

 
function results(checkWin){
  if(checkWin === "its a draw!"){
    function drawsCounter(){
      return drawsCounter.count++
    }
    
    console.log(`chicken score ${drawsCounter}`)
    return drawsCounter
  }

  else if(checkWin === "user 1") {
    ++user_score 
    console.log(`cow score ${user_score}`)
  }

}

var choices = document.getElementsByClassName('choice');
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)

  } catch(err) {
    //First load
  }
}
