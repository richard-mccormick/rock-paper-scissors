console.log("ITS WORKING!!!");

// Code for computer choice

function getComputerChoice(){
    let compChoice = Math.random();

    if (compChoice < 1/3) {
        return 'rock';
    } else if (compChoice > 2/3 ) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Pick one! (Rock, Paper, or Scissors)", "").toLowerCase();
    
    if (humanChoice ===  'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert("This is not a valid answer. Try again!");
        getHumanChoice();
        return;
    }

    let humanScore = 0;
    let computerScore = 0;


   function playRound(){
       getComputerChoice();
       getHumanChoice();

       if ((compChoice === 'rock' && humanChoice === 'paper') || (compChoice === 'paper' && humanChoice === 'scissors') || (compChoice === 'scissors' && humanChoice ===  'rock')) {

       }

    }
}