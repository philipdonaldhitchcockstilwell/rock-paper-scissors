/* Declaring Constants */
const randSelect = 3;
let playerSelection = "unchosen";
let computerSelection = null;
let playerWins = 0;
let computerWins = 0;
let roundNumber = 1;

/* HTML elements for score display */
const scoreElements = document.getElementById('scoreElements');
let playerScoreDisplay = document.createElement('p');
playerScoreDisplay.classList.add('scoreDisplay');
let computerScoreDisplay =  document.createElement('p');
computerScoreDisplay.classList.add('scoreDisplay');
let roundNumberDisplay = document.createElement('p');
roundNumberDisplay.classList.add('scoreDisplay');

/* Detecting "Play Game" button-press */
document.getElementById("play-game").addEventListener('click', function() {
    playButtonPressed();
    createInfoPanel();
});

/* When play button is pressed, we will hide the play button and show the game button container */
function playButtonPressed() {
    document.getElementById("play-game").style.display = "none";
    document.getElementById("buttonsContainer").style.display = "flex";
}
/* Creates info panel. This should be triggered when play button is pressed. */
function createInfoPanel() {
    scoreElements.appendChild(playerScoreDisplay);
    scoreElements.appendChild(computerScoreDisplay);
    scoreElements.appendChild(roundNumberDisplay);
    playerScoreDisplay.textContent = 'Player Wins: ' + playerWins;
    computerScoreDisplay.textContent = 'Computer Wins ' + computerWins;
}

/* Listening for player to click button */
document.getElementById("rock").addEventListener('click', function() {
    playerSelection = choose(rock);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
document.getElementById("paper").onclick = choose("paper");
document.getElementById("scissors").onclick = choose("scissors");

/* Function to assign the player choice according to which button is pressed. */
function choose(choice) {
    playerSelection = choice;
}

function roundPlay(playerSelection, computerSelection) {

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* This function should return "rock", "paper", or "scissors" */
function computerPlay() {

    /* choiceInt will equal either 0, 1, or 2 */
    let choiceInt = getRandomInt(randSelect);
    let choiceStr = " ";

    /* List of switch cases to convert 0, 1, or 2, to "Rock", "Paper", or "Scissors" */
    switch (choiceInt) {
        case 0:
            choiceStr = "rock";
            return choiceStr;
        case 1:
            choiceStr = "paper";
            return choiceStr;
        case 2:
            choiceStr = "scissors";
            return choiceStr;
        default:
            choiceStr = "poop";
            return choiceStr;
    }      
}
/* This function plays the round */
function playRound(playerSelection) {
    
    /* Draw Condition */
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("Draw.");

    /* Rock conditions for player (W/L) */
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log("Computer wins.");
            computerWins++;
            roundNumber++;
        } else if (computerSelection === "scissors") {
            console.log("You won the round.");
            playerWins++;
            roundNumber++;
        } 
    /* Paper conditions for player (W/L) */          
    } else if (playerSelection.toLowerCase() === "paper") {
        } else if (computerSelection === "rock") {
            console.log("You won the round.");
            playerWins++;
            roundNumber++;
        } else if (computerSelection === "scissors") {
            console.log("Computer wins.");
            computerWins++;
            roundNumber++;
    /* Scissors conditions for player (W/L) */
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            console.log("You won the round.");
            playerWins++;
            roundNumber++;
        } else if (computerSelection === "rock") {
            console.log("Computer wins.");
            computerWins++;
            roundNumber++;
        }
    }
}