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
    const match = `${humanChoice}-${computerChoice}`;

    switch (match) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            humanScore++;
            return console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            computerScore++;
            return console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
        
        default:
            return console.log("Draw! Nobody Wins.");
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



