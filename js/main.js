function startGame(e) {
  var choice = e.target.id
  console.log(choice)
  computerChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)]
   console.log(computerChoice)
   return computerChoice
}

function checkWin(checkWin){
  if choice == 

}

function results (){

}


var choices = document.getElementsByClassName('choice');
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)

  } catch(err) {
    //First load
  }
}
