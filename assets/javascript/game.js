$(document).ready(function() {
//Generate a random number between 19 and 120 to guess   
  var targetNumber = (Math.floor(Math.random() * 101) + 19);
  $("#number-to-guess").text(targetNumber);var crystals = $("#crystals");

console.log("Number to guess: " + targetNumber); 

//Global variables
var counter = 0;
var numberOptions = [];
var wins = 0;
var losses = 0;
//Images array for "src" attributes
var crystalImages = ["assets/images/crystals-01.png", "assets/images/crystals-02.png", "assets/images/crystals-03.png", "assets/images/crystals-04.png"];

//Generate 4 random numbers between 1 and 12 for crystal values
function fourNumbers() {
  for (var i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * 13 + 1);
      numberOptions.push(num);
  }
}
fourNumbers();
console.log("Crystal values: " + numberOptions);

//Resets the game after win/lose
function reset() {
  targetNumber = (Math.floor(Math.random()* 101) + 19);
  $("#number-to-guess").text(targetNumber);
  numberOptions = [];
  fourNumbers();
  counter = 0;
  $("#totalScore").text("Your score so far: " + counter);
}

//Generates 4 crystal images with different "src" attributes and random values based on the numberOptions variable
for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalImages[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystals.append(imageCrystal);
}

//Adds the value of crystal clicked to the counter and displays in total score.
crystals.on("click", ".crystal-image", function() {   
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue); 
    counter += crystalValue;
    $("#totalScore").text("Your score so far: " + counter);

console.log("Counter: " + counter);    

//Sets win or lose condition and execution
    if (counter === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);  
        alert("You win!");
        reset();
        alert("Try again!");
    }

    else if (counter >= targetNumber) {
        losses++;  
        $("#losses").text("Losses: " + losses);
        alert("You lose!!");
        reset();
        alert("Try again!");
    }

});

});