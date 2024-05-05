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