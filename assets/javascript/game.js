$(document).ready(function(){

  var targetNumber = 45;
  var counter = 0;
  var numberOptions = [10, 5, 3, 7];
    for (var i = 0; i < numberOptions.length; i++) {

    }

$("#numberToMatch").text(targetNumber);
$("#totalScore").append(counter);

function targetValue() {
  document.getElementById("numberToMatch").value = Math.floor(Math.random() * 120) + 19;
  targetNumber = targetValue();
}

$("#crystalImg1").click

console.log(buttonValue);



   
});
