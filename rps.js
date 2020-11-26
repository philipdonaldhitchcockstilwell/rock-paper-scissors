/* Generate random integer for use within the computerPlay function */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* This function should return "rock", "paper", or "scissors" */
function computerPlay() {

    /* choiceInt will equal either 0, 1, or 2 */
    let choiceInt = getRandomInt(randSelect);
    let choiceStr = " ";

    /* Debug Command */
    /* console.log("choiceInt = " + choiceInt); */
    /* End Debug Command */

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

    /* Debug Command */
    /* End Debug Command */
    }      
}
/* This function plays the round */
function playRound(playerSelection, computerSelection) {

/* Debug Command */
/* console.log("Player Choice: " + playerSelection.toLowerCase());
console.log("Computer Choice: " + computerSelection); */
/* End Debug Command */

    /* Draw Condition */
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("Draw.");
    /* Rock conditions for player (W/L) */
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log("Computer wins.");
            computerWins++;
        } else if (computerSelection === "scissors") {
            console.log("You won the round.");
            playerWins++;
        } 
    /* Paper conditions for player (W/L) */          
    } else if (playerSelection.toLowerCase() === "paper") {
        } else if (computerSelection === "rock") {
            console.log("You won the round.");
            playerWins++;
        } else if (computerSelection === "scissors") {
            console.log("Computer wins.");
            computerWins++;
    /* Scissors conditions for player (W/L) */
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            console.log("You won the round.");
            playerWins++;
        } else if (computerSelection === "rock") {
            console.log("Computer wins.");
            computerWins++;
        }
    }
}
/* Plays a five round game of rock, paper, scissors. */
function game() {
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i <= 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("Current Score");
        console.log("You: " + playerWins);
        console.log("Computer: " + computerWins);
    }

    /* "Game Over" conditions. Only triggers after 5 rounds have been played. */
    console.log("Game Over.");
    if (playerWins > computerWins) {
        console.log("You win! Score: " + playerWins + " to " + computerWins)
    }
    else if (playerWins === computerWins) {
        console.log("Tie Game. Score: " + playerWins + " to " + computerWins)
    }
    else if (playerWins < computerWins) {
        console.log("The computer beat you. Score: " + playerWins + " to " + computerWins)
    }

}

/* Declaring Constants */
const randSelect = 3;
let playerSelection = "unchosen";
let computerSelection = null;
let playerWins = 0;
let computerWins = 0;