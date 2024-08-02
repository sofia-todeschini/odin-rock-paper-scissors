MAX_SCORE = 5

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  stringDisplay.textContent = ""
  scoreDisplay.textContent = "Human Score: " + humanScore + "\nComputer Score: " + computerScore}

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.333333) 
    return "rock"
  if (randomNumber > 0.666666)
    return "paper"
  return "scissors"
}

/* function getHumanChoice() {
  const userInput = prompt("Play Rock Paper Scissors: ")
  return userInput.toLowerCase()
} */

let humanScore = 0
let computerScore = 0

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1, string.length)
}

function resultString(humanChoice, computerChoice, result){
  if (result === "win")
    return "You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice)
  if (result === "lose")
    return "You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice)
  return "It's a draw! Both you and the computer played " + capitalize(humanChoice)
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === MAX_SCORE | computerScore === MAX_SCORE) {
    let winner;
    if (humanScore > computerScore) {
      winner = "Human"
    }
    else {
      winner = "Computer"
    }
    alert("Game ends!\nFinal scores:\n" + scoreDisplay.textContent + "\n" + winner + " wins!")
    resetGame()
  }

  // console.log(computerChoice)
    // if (humanChoice === computerChoice)
    //   return "It's a draw! Both you and the computer played " + capitalize(humanChoice)
  else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "win");
    }
    else if (computerChoice === "paper") {
      computerScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "lose");
    }
    else stringDisplay.textContent = resultString(humanChoice, computerChoice, "draw");
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "win");
    }
    else if (computerChoice === "scissors") {
      computerScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "lose");
    }
    else stringDisplay.textContent = resultString(humanChoice, computerChoice, "draw");
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "win");
    }
    else if (computerChoice === "rock") {
      computerScore++;
      stringDisplay.textContent = resultString(humanChoice, computerChoice, "lose");
    }
    else stringDisplay.textContent = resultString(humanChoice, computerChoice, "draw");
  }

  scoreDisplay.textContent = "Human Score: " + humanScore + "\nComputer Score: " + computerScore
    
}
/* 
function playGame(roundAmount) {
  for (let i = 0; i < roundAmount; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You win! You scored " + humanScore + " points and the computer scored " + computerScore + " points")
  }
  else if (humanScore < computerScore) {
    console.log("You lose! You scored " + humanScore + " points and the computer scored " + computerScore + " points")
  }
  else {
    console.log("It's a draw! You scored " + humanScore + " points and the computer scored " + computerScore + " points")
  }
} */

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

const container = document.querySelector("#container");
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const stringDisplay = document.createElement("div");
const scoreDisplay = document.createElement("div");

container.appendChild(stringDisplay)
container.appendChild(scoreDisplay)

const resetButton = document.createElement("button");
resetButton.textContent = "Reset"
resetButton.addEventListener("click", () => resetGame());
container.appendChild(resetButton);