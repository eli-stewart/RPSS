// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var currentScore = [0, 0, 0];
var matchScore = [0, 0];

// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
var playerChoice;
var computerChoice;

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // A tie
        console.log("tie");
        return 0;
    } else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors
        console.log("win");
        return 1;
    } else if (playerChoice == 0 && computerChoice == 4) {
        // Rock beats Lizard
        console.log("win");
        return 1;
    }else if (playerChoice == 1 && computerChoice == 1) {
        // Paper beats Rock
        console.log("win");
        return 1;
    }else if (playerChoice == 1 && computerChoice == 3) {
        // Paper beats Spock
        console.log("win");
        return 1;
    }else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper
        return 1;
    }else if (playerChoice == 2 && computerChoice == 4) {
        // Scissors beats lizard
        console.log("win");
        return 1;
    }else if (playerChoice == 3 && computerChoice == 2) {
        // Spock beats scissors
        console.log("win");
        return 1;
    }else if (playerChoice == 3 && computerChoice == 0) {
        // Spock beats rock
        console.log("win");
        return 1;
    }else if (playerChoice == 4 && computerChoice == 3) {
        // Lizard beats Spock
        console.log("win");
        return 1;
    } else if (playerChoice == 4 && computerChoice == 1) {
        // Lizard beats paper
        console.log("win");
        return 1;
    } else {
        // All loss possibilities
        console.log("loss");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

function displayCurrentScore(currentWinsId, currentLossesId, currentTiesId) {
    document.getElementById(currentWinsId).innerHTML = currentScore[0];
    document.getElementById(currentLossesId).innerHTML = currentScore[2];
    document.getElementById(currentTiesId).innerHTML = currentScore[1];
}

function displayMatch(matchWinsId, matchLossesId) {
    document.getElementById(matchWinsId).innerHTML = matchScore[0];
    document.getElementById(matchLossesId).innerHTML = matchScore[1];
}

function updateScore(val) {
    ++score[val];
    ++currentScore[val];
    console.log("The score is now " + score);
}

function updateMatch(val) {
    ++matchScore[val];
}

function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"]; // array including all possibilities
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random()*5); // randomizer of all 5 options
    console.log("Computer choice = " + computerChoice);
}

function clearCurrentScore() {
    currentScore == [0, 0, 0];
}

function match() {
    if (currentScore[0] == 2) {
        updateMatch(0);
        clearCurrentScore();
    } else if (currentScore[2] == 2) {
        updateMatch(1);
        clearCurrentScore();
    }
}
