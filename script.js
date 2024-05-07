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

//choice buttons

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


let humanScore = 0;
let computerScore = 0;

//display score 
const currentScoreHuman = document.querySelector("#currentScoreHuman");
const currentScoreComputer = document.querySelector("#currentScoreComputer");
currentScoreComputer.textContent = "Computer score: " + computerScore;
currentScoreHuman.textContent = "Human score: " + humanScore;

function playRound(human, computer) {

    const resultText = document.querySelector("#resultText");

    if(computerScore >= 5 || humanScore >= 5) {
        humanScore = computerScore = 0;
    }

    if ((computer === 'rock' && human === 'paper') || (computer === 'paper' && human === 'scissors') || (computer === 'scissors' && human ===  'rock')) {
        humanScore++;
        currentScoreComputer.textContent = "Computer score: " + computerScore;
        currentScoreHuman.textContent = "Human score: " + humanScore;
        resultText.textContent = "You win! " + (human.charAt(0).toUpperCase()+human.slice(1)) + " beats " + computer + "!"
    }else if (computer === human) {
        resultText.textContent = "It's a tie!"
    }else {
        computerScore++;
        currentScoreComputer.textContent = "Computer score: " + computerScore;
        currentScoreHuman.textContent = "Human score: " + humanScore;
        resultText.textContent = "You lose. " + (computer.charAt(0).toUpperCase()+computer.slice(1)) + " beats " + human + ".";
    }

    if(humanScore >= 5) {

        resultText.textContent = "YOU WIN IT ALL!! CONGRATS!!";
    }

    if(computerScore >= 5) {
        resultText.textContent = "you lose it all...  Try again?";
    }
    }



//reset score button

const resetScore = document.querySelector("#reset");
resetScore.addEventListener("click", () => {
    humanScore = computerScore = 0;
    currentScoreComputer.textContent = "Computer score: " + computerScore;
    currentScoreHuman.textContent = "Human score: " + humanScore;
});

