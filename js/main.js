
var caloriesLeft = parseInt(Cookies.get('calories-left'));

if (caloriesLeft > 0) {
    $("#total-calories").val(caloriesLeft);
    $('#start-button').click();
} else {
    caloriesLeft = 0;
}

$("#start-button").click(function () {
  // get the user's inputted total calorie number from the textbox
  var totalCaloriesFromTextBox = parseInt($("#total-calories").val());

  if (totalCaloriesFromTextBox > 0) {
    setCalories(totalCaloriesFromTextBox);
    $(".start-page").hide();
    $(".calculator-page").show();
  }

  // place cursor into input
  $('#plate-calories').focus();

});

$("#add-button").click(function () {
  // get the user's inputted cal count for this plate from the textbox
  var plateCaloriesFromTextBox = $("#plate-calories").val();

  // clear the number they entered
  $("#plate-calories").val("");

  // check if it is a valid number
  if (!isNaN(plateCaloriesFromTextBox) && plateCaloriesFromTextBox !== "") {
    subtractCalories(parseInt(plateCaloriesFromTextBox));
  }

  // place cursor back into input
  $('#plate-calories').focus();
});

$("#reset-button").click(function () {
  if (confirm("Are you sure you would like to reset?")) {
    $(".calculator-page").hide();
    $(".start-page").show();
  }
});

$(document).ready(function(){
    if (caloriesLeft) {
        $('#start-button').click();
    }
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



function setCalories (newCalorieAmount) {
  caloriesLeft = newCalorieAmount;

  Cookies.set('calories-left', caloriesLeft, {expires: 1/12});

  //display that number in the counter
  $("#calories-left").text(caloriesLeft);
}

function subtractCalories (amountToSubtract) {
  setCalories(caloriesLeft - amountToSubtract);
}
