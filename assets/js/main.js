const playButton = document.querySelector('#play');
const mainGame = document.querySelector('#game');

const rockSelect = document.querySelector('#rock-select');
const paperSelect = document.querySelector('#paper-select');
const scissorsSelect = document.querySelector('#scissors-select');

function switchScreen() {
    playButton.classList.add('hidden');
    playButton.parentElement.classList.add('hidden');
    mainGame.classList.remove('hidden');
}

function computerSelect() {
    let n = getRandomInteger(1,3);
    if (n === 1) {
        const computerRock = document.createElement('img');
        computerRock.src = "./images/stone.svg";
        computerRock.alt = "Computer threw rock";
        document.getElementById('computer').appendChild(computerRock);
        return 'rock';
    }
    if (n === 2) {
        const computerPaper = document.createElement('img');
        computerPaper.src = "./images/paper.svg";
        computerPaper.alt = "Computer threw paper";
        document.getElementById('computer').appendChild(computerPaper);
        return 'paper';
    }
    if (n === 3) {
        const computerScissors = document.createElement('img');
        computerScissors.src = "./images/scissors.svg";
        computerScissors.alt = "Computer threw scissors";
        document.getElementById('computer').appendChild(computerScissors);
        return 'scissors';
    }
}

function playerSelect(object) {

}

// Return random integer from 1-3 (inclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

playButton.addEventListener('click', switchScreen);

rockSelect.addEventListener('click', playerSelect("rock"));
paperSelect.addEventListener('click', playerSelect("paper"));
scissorsSelect.addEventListener('click', playerSelect("scissors"));