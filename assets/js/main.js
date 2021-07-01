// Select DOM
const playButton = document.querySelector('#play');
const mainGame = document.querySelector('#game');
const restartGame = document.querySelector('#restart');
const playAgainButton = document.querySelector('#playAgain');

const rockSelect = document.querySelector('#rock-select');
const paperSelect = document.querySelector('#paper-select');
const scissorsSelect = document.querySelector('#scissors-select');

const playerObject = document.querySelector('#playerObject');
const computerObject = document.querySelector('#computerObject');

const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

const roundResultText = document.querySelector('#roundResult');
const roundNumberText = document.querySelector('#roundNumber');

const gameResultText = document.querySelector('#gameResult');

let playerSelection = null;
let computerSelection = null;
let roundWinner = null;
let playerScore = null;
let computerScore = null;
let roundNumber = null;

function init() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    playerScoreText.textContent = "Score: " + playerScore;
    computerScoreText.textContent = "Score: " + computerScore;
    roundNumberText.textContent = "Round " + roundNumber;
    roundResultText.textContent = "";
}

// Hide the play button and reveal the game
function switchScreen() {
    playButton.classList.add('hidden');
    playButton.parentElement.classList.add('hidden');
    mainGame.classList.remove('hidden');
}

// Hide the game and reveal play again button
function playAgain() {
    mainGame.classList.add('hidden');
    restartGame.classList.remove('hidden');
    playAgainButton.classList.remove('hidden');
    gameResultText.classList.remove('hidden');
}

// Start game from play again button
function startAgain() {
    restartGame.classList.add('hidden');
    mainGame.classList.remove('hidden');
    playAgainButton.classList.add('hidden');
    gameResultText.classList.add('hidden');
    init();
}

// Player selection using click events
function playerSelect(choice) {

    // Display selection
    if (choice === "rock") {
        playerObject.src = "./images/stone.svg";
        playerObject.alt = "Player threw rock";
        playerSelection = "rock";
    }
    if (choice === "paper") {
        playerObject.src = "./images/paper.svg";
        playerObject.alt = "Player threw paper";
        playerSelection = "paper";
    }
    if (choice === "scissors") {
        playerObject.src = "./images/scissors.svg";
        playerObject.alt = "Player threw scissors";
        playerSelection = "scissors";
    }

    if (choice === null || choice === undefined) console.log("ERROR [playerSelect]: Player object not selected.");

    console.log("Player chose " + choice);
}

// Computer selection using random integers
function computerSelect() {
    let n = getRandomInteger(1,3);
    if (n === 1) {
        computerObject.src = "./images/stone.svg";
        computerObject.alt = "Computer threw rock";
        computerSelection = 'rock';
    }
    if (n === 2) {
        computerObject.src = "./images/paper.svg";
        computerObject.alt = "Computer threw paper";
        computerSelection = 'paper';
    }
    if (n === 3) {
        computerObject.src = "./images/scissors.svg";
        computerObject.alt = "Computer threw scissors";
        computerSelection = 'scissors';
    }

    console.log("Computer chose " + computerSelection);
}

// Return random integer from 1-3 (inclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function compareThrows(player, computer) {
    if (player === computer) {
        roundResultText.textContent = "Great minds think alike!";
        return "tie";
    }
    if (player === "rock") {
        if (computer === "scissors") {
            roundResultText.textContent = "You crushed the scissors with a rock!";
            return "player";
        }
        if (computer === "paper") {
            roundResultText.textContent = "Your rock has been covered in paper!";
            return "computer";
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            roundResultText.textContent = "You covered the rock in paper!";
            return "player";
        }
        if (computer === "scissors") {
            roundResultText.textContent = "Your paper has been cut into pieces!";
            return "computer";
        }
    }
    if (player === "scissors") {
        if (computer === "paper") {
            roundResultText.textContent = "You snipped the paper into pieces!";
            return "player";
        }
        if (computer === "rock") {
            roundResultText.textContent = "Your scissors have been smashed by a rock!";
            return "computer";
        }
    }
    return console.log("ERROR [compareThrows]: Could not compare throws.");
}

function playRound(playerChoice) {
    playerSelect(playerChoice); 
    computerSelect();
    roundWinner = compareThrows(playerSelection, computerSelection);
    console.log("Round winner is " + roundWinner);
    update();
}

function update() {
    if (roundWinner === "player") {
        playerScoreText.textContent = "Score: " + ++playerScore;
    }
    if (roundWinner === "computer") {
        computerScoreText.textContent = "Score: " + ++computerScore;
    }
    roundNumberText.textContent = "Round " + ++roundNumber;

    if (playerScore === 5) {
        gameResultText.textContent = "You have bested the computer!";
        playAgain();
    }
    if (computerScore === 5) {
        gameResultText.textContent = "You have been defeated by the computer!";
        playAgain();
    }
}

// Play button on start
playButton.addEventListener('click', switchScreen);

// Play again button
playAgainButton.addEventListener('click', startAgain);

// Player choices
rockSelect.addEventListener('click', function() { playRound("rock"); });
paperSelect.addEventListener('click', function() { playRound("paper"); });
scissorsSelect.addEventListener('click', function() { playRound("scissors"); });