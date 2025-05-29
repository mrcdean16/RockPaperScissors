let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random() * 100;
    if (randomNum < 33) {
        console.log(randomNum);
        return "rock";
    }
    else if (randomNum < 66) {
        console.log(randomNum);
        return "paper";
    }
    console.log(randomNum);
    return "scissors";
}

function getHumanChoice() {
    let playerChoice = prompt("Pick a value:");
    return playerChoice;
}


console.log(getComputerChoice());
console.log(getHumanChoice());

