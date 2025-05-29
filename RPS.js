function getComputerChoice() {
    testValue = Math.random() * 100;
    if (testValue < 33) {
        return "rock";
    }
    else if (testValue < 66) {
        return "paper";
    }
    return "scissors";
}

console.log(getComputerChoice());