$("#start-button").click(function () {
  // get the user's inputted total calorie number from the textbox
  var totalCaloriesFromTextBox = parseInt($("#total-calories").val());

  if (totalCaloriesFromTextBox > 0) {
    setCalories(totalCaloriesFromTextBox);
    $(".start-page").hide();
    $(".calculator-page").show();
  }

});

$("#add-button").click(function () {
  // get the user's inputted cal count for this plate from the textbox
  var plateCaloriesFromTextBox = $("#plate-calories").val();

  //clear the number they entered
  $("#plate-calories").val("");

  //check if it is a valid number
  if (!isNaN(plateCaloriesFromTextBox) && plateCaloriesFromTextBox !== "") {
    subtractCalories(parseInt(plateCaloriesFromTextBox));
  }
});

$("#reset-button").click(function () {
  $(".calculator-page").hide();
  $(".start-page").show();
});

$(document).ready(function(){
    $('#total-calories').keydown(function(e){
      if(e.keyCode==13 || e.keyCode==9){
        $('#start-button').click();
      }

    });
    $('#plate-calories').keydown(function(e){
      if(e.keyCode==13 || e.keyCode==9) {
        $('#add-button').click();
      }
    });
});

var caloriesLeft = 0;
function setCalories (newCalorieAmount) {
  caloriesLeft = newCalorieAmount;

  //display that number in the counter
  $("#calories-left").text(caloriesLeft);
}

function subtractCalories (amountToSubtract) {
  setCalories(caloriesLeft - amountToSubtract);
}
