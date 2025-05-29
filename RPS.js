let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random() * 100;
    if (randomNum < 33) {
        return "rock";
    }
    else if (randomNum < 66) {
        return "paper";
    }
    return "scissors";
}

let getHumanChoice = () => prompt("Pick a Value:");


function playRound(humanChoice, computerChoice) {
    // Converts to lowercase so the capitalization of user-input doesn't matter
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice)
        return console.log("Draw! Nobody Wins.");

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log("You Win! Rock beats Scissors.");
    }
        
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return console.log("You Lose! Paper beats Rock.");
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log("You Win! Paper beats Rock.");
    }
        
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return console.log("You Lose! Scissors beats Paper.");
    }
        

    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log("You Win! Scissors beats Paper.");
    }
        
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return console.log("You Lose! Rock beats Scissors");
    }
        

}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Scores: Human with ${humanScore} and Computer with ${computerScore}.`);
    (humanScore > computerScore) ? console.log("You win!") : console.log("You lose :(");
}

// function call to start game
playGame();



