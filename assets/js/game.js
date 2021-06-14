function computerPlay() {
    let n = getRandomInteger(1,3);
    if (n === 1) {
        return "rock";
    }
    if (n === 2) {
        return "paper";
    }
    if (n === 3) {
        return "scissors";
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie! You both chose rock.";
        }
        if (computerSelection === "paper") {
            computerScore++;
            return "You lost the round! Paper beats rock.";
        }
        if (computerSelection === "scissors") {
            playerScore++;
            return "You won the round! Rock beats scissors.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You won the round! Paper beats rock.";
        }
        if (computerSelection === "paper") {
            return "Tie! You both chose paper.";
        }
        if (computerSelection === "scissors") {
            computerScore++;
            return "You lost the round! Scissors beats paper.";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lost the round! Rock beats Scissors.";
        }
        if (computerSelection === "paper") {
            playerScore++;
            return "You won the round! Scissors beats paper.";
        }
        if (computerSelection === "scissors") {
            return "Tie! You both chose scissors.";
        }
    }
}

function game() {
    alert("Welcome to rock, paper, scissors! You will now play against the computer. First to five points wins!");
    let i = 1;
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Round " + i + ". Choose rock, paper, or scissors!").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }
    if (playerScore > computerScore) {
        alert("You have bested the computer! \n\nYour score: " + playerScore + "\nComputer's score: " + computerScore + "\n\nRefresh the page to play again.");
    }
    else {
        alert("The computer is victorious this time! \n\nYour score: " + playerScore + "\nComputer's score: " + computerScore + "\n\nRefresh the page to play again.");
    }
}

let playerScore = 0;
let computerScore = 0;
game();