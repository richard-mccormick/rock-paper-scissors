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

    
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let compSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    if ((compSelection === 'rock' && humanSelection === 'paper') || (compSelection === 'paper' && humanSelection === 'scissors') || (compSelection === 'scissors' && humanSelection ===  'rock')) {
        humanScore++;
        return console.log('You win! ' + (humanSelection.charAt(0).toUpperCase()+humanSelection.slice(1)) + ' beats ' +compSelection + '!')
    }else if (compSelection === humanSelection) {
        return console.log("It's a tie!");
    }else {
        computerScore++;
        return console.log('You lose! ' + (compSelection.charAt(0).toUpperCase()+compSelection.slice(1)) + ' beats ' + humanSelection + '!');
    }

    }
