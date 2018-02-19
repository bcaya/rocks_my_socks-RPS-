//returns users total score
// stores what the user chose 
var user;
var computer; 
var opts = {
  0: 'rock',
  1: 'paper', 
  2: 'scissors'
  }
var userLabel = document.getElementById('user');
var computer_label = document.getElementById('computer');
var winnerLabel = document.getElementById('winner');
var result;

var opt_keys = Object.keys(opts);
var opt_values = Object.values(opts);
var opt_num = opt_keys.length


function computerChoice() { // this will store the computers choice 
      var index = Math.floor(Math.random() * opt_keys.length); // gets random from 0-2 and rounds down
       return opt_values[index]; // save the text from options hash 
  }

function compare() {
   userIndex = opt_values.indexOf(user);
   computerIndex = opt_values.indexOf(computer);
  if (userIndex === computerIndex) {
    result = 'Tie'
  }
    else if (userIndex === opt_values.length - 1 && computerIndex === 0 ) {
     result = 'Lose';
  } else if (computerIndex === opt_values.length - 1 && userIndex === 0 ){
     result = 'Win'
  } else if (userIndex > computerIndex) {
   result = 'Win'
  } else {
   result = 'Lose';
  }
}

function printResults(){
  userLabel.innerHTML = 'User: ' + user;
  computer_label.innerHTML ='Computer: ' + computer;
  winnerLabel.innerHTML = 'Results: ' + result;
}
function startGame(e){
  user = e.target.id;
  computer = computerChoice();
  compare();
  printResults(); 
}

var choices = document.getElementsByClassName('choice');
    for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame);
  } catch(err) {
    //First load
  }
}