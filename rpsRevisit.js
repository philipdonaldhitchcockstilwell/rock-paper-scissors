/* Declaring Constants */
const randSelect = 3;
let playerSelection = "unchosen";
let computerSelection = null;
let playerWins = 0;
let computerWins = 0;
let roundNumber = 1;

/* Declaring HTML elements for score display */
const scoreElements = document.getElementById('scoreElements');
let playerScoreDisplay = document.createElement('p');
playerScoreDisplay.classList.add('scoreDisplay');
let computerScoreDisplay =  document.createElement('p');
computerScoreDisplay.classList.add('scoreDisplay');
let roundNumberDisplay = document.createElement('p');
roundNumberDisplay.classList.add('scoreDisplay');
let extraRoundInfo = document.createElement('p');
extraRoundInfo.classList.add('scoreDisplay');

/* Event listener to detect "Play Game" button press */
document.getElementById("play-game").addEventListener('click', function() {
    playButtonPressed();
    createInfoPanel();
});

/* Hides the play button and shows the "rock, paper scissors" buttons */
function playButtonPressed() {
    document.getElementById("play-game").style.display = "none";
    document.getElementById("buttonsContainer").style.display = "flex";
}
/* Generates info panel. This should be triggered when play button is pressed */
function createInfoPanel() {
    scoreElements.appendChild(playerScoreDisplay);
    scoreElements.appendChild(computerScoreDisplay);
    scoreElements.appendChild(roundNumberDisplay);
    scoreElements.createElement(extraRoundInfo); // TODO: Give extra round info its own div. Other elements need to stay in place.
    playerScoreDisplay.textContent = 'Player Wins: ' + playerWins;
    computerScoreDisplay.textContent = 'Computer Wins: ' + computerWins;
    roundNumberDisplay.textContent = "Round " + roundNumber;
    extraRoundInfo.textContent = 'Test';
}

/* Event Listeners for player input. Player input triggers computer choice and round W/L check */
document.getElementById('rock').addEventListener('click', function() {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
document.getElementById('paper').addEventListener('click', function() {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
document.getElementById('scissors').addEventListener('click', function() {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

/* Generates random integer for use inside computerPlay function */
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
/* Compares player value to computer value and adds scores and round numbers */
function playRound(playerSelection, computerSelection) {
    
    if (roundNumber <= 4){
        /* Draw Condition */
        if (playerSelection === computerSelection) {
            extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". Draw.";

        /* Rock conditions for player (W/L) */
        } else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + computerSelection + " beats " + playerSelection + ". Computer wins.";
                computerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                computerScoreDisplay.textContent = 'Computer Wins: ' + computerWins;
            } else if (computerSelection === "scissors") {
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + playerSelection + " beats " + computerSelection + ". You win.";
                playerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                playerScoreDisplay.textContent = 'Player Wins: ' + playerWins;
            } 
        /* Paper conditions for player (W/L) */          
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + playerSelection + " beats " + computerSelection + ". You win.";
                playerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                playerScoreDisplay.textContent = 'Player Wins: ' + playerWins;
            } else if (computerSelection === "scissors") {
                console.log("Computer wins.");
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + computerSelection + " beats " + playerSelection + ". Computer wins.";
                computerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                computerScoreDisplay.textContent = 'Computer Wins: ' + computerWins;
            }
        /* Scissors conditions for player (W/L) */
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + playerSelection + " beats " + computerSelection + ". You win.";
                playerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                playerScoreDisplay.textContent = 'Player Wins: ' + playerWins;
            } else if (computerSelection === "rock") {
                extraRoundInfo.textContent = playerSelection + " vs " + computerSelection + ". " + computerSelection + " beats " + playerSelection + ". Computer wins.";
                computerWins++;
                roundNumber++;
                roundNumberDisplay.textContent = "Round " + roundNumber;
                computerScoreDisplay.textContent = 'Computer Wins: ' + computerWins;
            }
        }
    }
}

// TODO: Add functionality for when 5 rounds are played. Screen should display winner.
// TODO: Add button to start new game. New game should reset all values.