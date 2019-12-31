// There will be four crystals displayed as buttons on the page.
//done with html and css

// The player will be shown a random number at the start of the game.
//Math.floor(Math.random())



// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//on click function for each crystal 
// variables
var targetScore;
var gems;
var currentScore;
var wins = 0;
var losses = 0;
initializeGame();

function initializeGame() {
    showInstructions();
    hideResetButton();
    initializeVals();
    initializeView();
    initializeGems();
}

function endGameWithLoss() {
    hideInstructions();
    showResetButton();
    $(".lose").show();
    $(".win").hide();
    $("#currentNumber").css('color', 'red');
    losses++;

    updateWinLossCount();
}

function endGameWithWin() {
    hideInstructions();
    showResetButton();
    $(".lose").hide();
    $(".win").show();
    $("#currentNumber").css('color', 'green');
    win++;

    updateWinLossCount();
}

function hideResetButton() {
    $(".startOver").hide();
}

function showResetButton() {
    $(".startOver").show();
}

function showInstructions() {
    $(".instructions").show();
}

function hideInstructions() {
    $(".instructions").hide();
}



function initializeGems() {
    $(".gems .red").on('click', function () {
        add(gems.red, currentScore);
        updateCurrentScore();
    });

    $(".gems .blue").on('click', function () {
        add(gems.blue, currentScore);
        updateCurrentScore();
    });

    $(".gems .green").on('click', function () {
        add(gems.green, currentScore);
        updateCurrentScore();
    });

    $(".gems .yellow").on('click', function () {
        add(gems.yellow, currentScore);
        updateCurrentScore();
    });
}

function updateCurrentScore() {
    checkForWinState();
    $("#currentNumber").html(currentScore);
}

function checkForWinState() {
    if (currentScore > targetScore) {
        endGameWithLoss();
    } else if (currentScore == targetScore) {
        endGameWithWin();
    }
}

function initializeVals() {
    targetScore = getRandomNumber(12, 100);
    gems = {
        red: getRandomNumber(0, 12),
        green: getRandomNumber(0, 12),
        blue: getRandomNumber(0, 12),
        yellow: getRandomNumber(0, 12)
    };
    currentScore = 0;

}

function initializeView() {
    $(".currentNumber").css("color", "black");
    updateTargetNumber();
    updateWinLossCount();
}

function updateWinLossCount() {
    $("#wins").html(wins);
    $("#losses").html(losses);
    console.log(losses, wins)

}

console.log(targetScore)

function getRandomNumber(min, max) {
    value = Math.ceil(Math.random() * (max - min) + min)

    return value;

}

function add(num1) {
    currentScore += num1;
    console.log(currentScore);
    return value;
}

//update initial score
function updateTargetNumber() {
    $("#targetNumber").html(targetScore);
};




// updateTargetNumber();



//update 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.



// The player wins if their total score matches the random number from the beginning of the game.


// The player loses if their score goes above the random number.


// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
