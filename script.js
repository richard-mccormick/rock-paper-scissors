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
        return humanChoice = getHumanChoice();
    }

    
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    //let computer = getComputerChoice();
    //let human = getHumanChoice();

    if ((computer === 'rock' && human === 'paper') || (computer === 'paper' && human === 'scissors') || (computer === 'scissors' && human ===  'rock')) {
        humanScore++;
        return console.log('You win! ' + (human.charAt(0).toUpperCase()+human.slice(1)) + ' beats ' +computer + '!')
    }else if (computer === human) {
        return console.log("It's a tie!");
    }else {
        computerScore++;
        return console.log('You lose! ' + (computer.charAt(0).toUpperCase()+computer.slice(1)) + ' beats ' + human + '!');
    }

    }

function playGame() {
    if (humanScore >= 3) {
        console.log ('You win! Final score: Player - ' + humanScore + ' Computer - ' + computerScore);
        return humanScore = computerScore = 0;
    } else if (computerScore >= 3) {
        console.log ('You lose! Final score: Player - ' + humanScore + ' Computer - ' + computerScore);
        return humanScore = computerScore = 0;
    } else {
        playRound();
        console.log ('Player - ' + humanScore + ' Computer: ' + computerScore);
        playGame ();
        return;
    }
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click",() => {
    playRound("rock", getComputerChoice());
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
