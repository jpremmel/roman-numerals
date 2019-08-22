//USER INTERFACE
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertToRoman(parseInt($("#number-input").val())))
  });
});
//BUSINESS LOGIC
function convertToRoman(input) {
  var output = "";
  var ones = "";
  var tens = "";
  var hundreds = "";
  var thousands = "";
  if (input > 3999 || input < 0) {
    alert("Please enter a number between 0 and 3,999");
  } else {
    var inputString = input.toString();
    var digitArray = inputString.split("");

    if(digitArray[3]) {
      digitArray[0] = digitArray[0] + "000";
      digitArray[1] = digitArray[1] + "00";
      digitArray[2] = digitArray[2] + "0";
    } else if (digitArray[2]) {
      digitArray[0] = digitArray[0] + "00";
      digitArray[1] = digitArray[1] + "0";
    } else if (digitArray[1]) {
      digitArray[0] = digitArray[0] + "0"
    }
    console.log(digitArray);


    for(var i=0; i<input; i++){
      ones += "I";
    }


  }
  output= thousands + hundreds + tens + ones;
  return output;
}
