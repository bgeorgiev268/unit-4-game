// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// variables
var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore = 0;
var blue = 0;
var green = 0;
var red = 0;
var yellow = 0;
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};


//Functions 
//======================================================

// Helper function for getting random numbers
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// starts the game (and restarts the game)
function startGame() {
    //Reset current score
    currentScore = 0;
    $("#currentnumber").text(currentScore)
    //Set new target score (19-120)
    targetScore = getRandom(19, 120)
    $("#randomNumber").text(targetScore)
    // set different values for each crystal (1-12)
    crystal.blue.value = getRandom(1, 12)
    crystal.green.value = getRandom(1, 12)
    crystal.red.value = getRandom(1, 12)
    crystal.yellow.value = getRandom(1, 12)
}
// crystal click events
//======================================================

$('#one').on('click', function () {
    currentScore = currentScore + crystal.blue.value
    console.log(currentScore)
    verifyScore()
});
$('#two').on('click', function () {
    currentScore = currentScore + crystal.green.value
    console.log(currentScore)
    verifyScore()

});
$('#three').on('click', function () {
    currentScore = currentScore + crystal.red.value
    console.log(currentScore)
    verifyScore()

});
$('#four').on('click', function () {
    currentScore = currentScore + crystal.yellow.value
    console.log(currentScore)
    verifyScore()

});



function verifyScore() {
    $("#currentnumber").text(currentScore)
    if (currentScore === targetScore) {
        wins++
        $("#wins").text(wins)
        alert("You Win!")
        startGame()
    }
    else if (currentScore > targetScore) {
        losses++
        $("#losses").text(losses)
        alert("You Loose!")
        startGame()
    }
}

//starts the game the first time
startGame()