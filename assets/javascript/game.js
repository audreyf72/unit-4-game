//Generate random number at start of game between
//19 and 120 for targetNumber
$(document).ready(function() {
  var targetNumber = Math.floor(Math.random() * 120 + 19)
  $("#numberToMatch").text(targetNumber);

 console.log("Target number: " + targetNumber);

//global variables
  var randomValue = []
  var scoreValue = 0;
  var wins = 0;
  var losses = 0;

/*variables for each instance of crystal images
var crystal1 = $("#one");  
var crystal2 = $("#two");
var crystal3 = $("#three");
var crystal4 = $("#four");*/

//Target IDs for scores 
$("#numberLosses").text(losses);
$("#numberWins").text(wins);

//sets up random numbers for each crystal
function fourNumbers() {
  for (var i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * 13 + 1);
      randomValue.push(num);
  }
}
fourNumbers();

//resets the game
function reset() {
  Random = Math.floor(Math.random()* 69 + 30);
  $("#numberToMatch").text(targetNumber);
  randomValue = [];
  fourNumbers();
  scoreValue = 0;
  $("#totalScore").text(scoreValue);
}

//adds the wins to the total
function win() {
  alert("You won!");
  wins++;
  $("#numberWins").text(wins);
  reset();
}

//adds the losses to the total
function lose() {
  alert("You lost!");
  losses++;
  $("#numberLosses").text(losses);
  reset();
}

//Assign four random numbers to button ID's 
//---STUCK AT THIS POINT---
//Buttons are being clicked (checked with an alert) but functions not running
$("#one").click (function () {
  scoreValue = scoreValue + randomValue[0];
    $("#totalScore").text(scoreValue);

    if (scoreValue == targetNumber) {
        win();
    }
    else if (scoreValue > targetNumber) {
        lose();
    }
})

$("#two").click (function () {
  scoreValue = scoreValue + randomValue[1];
  $("#totalScore").text(scoreValue);

  if (scoreValue == targetNumber) {
      win();
  }
  else if (scoreValue > targetNumber) {
      lose();
  }
})

$("#three").click (function () {
  scoreValue = scoreValue + randomValue[2];
  $("#totalScore").text(scoreValue);

  if (scoreValue == targetNumber) {
      win();
  }
  else if (scoreValue > targetNumber) {
      lose();
  }
})

$("#four").click (function () {
  scoreValue = scoreValue + randomValue[3];
    $("#totalScore").text(scoreValue);

    if (scoreValue == targetNumber) {
        win();
    }
    else if (scoreValue > targetNumber) {
        lose();
    }
  });

console.log("Score value: " + scoreValue);
console.log("Random value: " + randomValue);
console.log("Wins :" + wins);
console.log("Losses: " + losses);

});
