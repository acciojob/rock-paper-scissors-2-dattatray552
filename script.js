//your code here

// Get HTML elements
const gameNumber = document.getElementById("game-number");
const playGame = document.getElementById("play-game");

const rock = document.querySelector('[data-ns-test="rock"]');
const paper = document.querySelector('[data-ns-test="paper"]');
const scissors = document.querySelector('[data-ns-test="scissors"]');

const computerChoose = document.querySelector('[data-ns-test="computer-choose"]');
const roundResult = document.querySelector('[data-ns-test="round-result"]');

const roundsLeft = document.querySelector('[data-ns-test="rounds-left"]');
const userPoints = document.querySelector('[data-ns-test="user-points"]');
const computerPoints = document.querySelector('[data-ns-test="computer-points"]');

const gameResult = document.querySelector('[data-ns-test="game-result"]');


// Game variables
let turns = 0;
let userScore = 0;
let computerScore = 0;


// Play button
playGame.addEventListener("click", function () {

    const number = Number(gameNumber.value);

    // Invalid input
    if (number <= 0 || !Number.isInteger(number)) {
        alert("Please enter a valid number of turns.");
        return;
    }

    // Start / reset game
    turns = number;
    userScore = 0;
    computerScore = 0;

    roundsLeft.innerText = turns;
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;

    computerChoose.innerText = "-";
    roundResult.innerText = "-";
    gameResult.innerText = "-";
});


// Function to play a round
function playRound(userChoice) {

    // Game should be started first
    if (turns <= 0) {
        alert("Please enter number of turns and click Play.");
        return;
    }

    // Computer chooses:
    // 0 = ROCK
    // 1 = PAPER
    // 2 = SCISSORS
    window.computer = Math.floor(Math.random() * 3);

    const choices = ["ROCK", "PAPER", "SCISSORS"];

    // Show computer choice
    computerChoose.innerText = choices[window.computer];

    // Check result
    if (userChoice === window.computer) {

        roundResult.innerText = "TIE";

    } else if (
        (userChoice === 0 && window.computer === 2) ||
        (userChoice === 1 && window.computer === 0) ||
        (userChoice === 2 && window.computer === 1)
    ) {

        userScore++;
        roundResult.innerText = "WON";

    } else {

        computerScore++;
        roundResult.innerText = "LOSE";
    }

    // One round completed
    turns--;

    // Update screen
    roundsLeft.innerText = turns;
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;

    // If no rounds are left
    if (turns === 0) {

        if (userScore > computerScore) {
            gameResult.innerText = "WON";
        } else if (userScore < computerScore) {
            gameResult.innerText = "LOSE";
        } else {
            gameResult.innerText = "TIE";
        }
    }
}


// Rock click
rock.addEventListener("click", function () {
    playRound(0);
});


// Paper click
paper.addEventListener("click", function () {
    playRound(1);
});


// Scissors click
scissors.addEventListener("click", function () {
    playRound(2);
});

