//USER INTERFACE
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertToRoman(parseInt($("#number-input").val())))
  });
});
//BUSINESS LOGIC
function convertToRoman(input) {
  var m = "";
  var d = "";
  var c = "";
  var l = "";
  var x = "";
  var v = "";
  var i = "";
  var ones = "";
  var tens = "";
  var hundreds = "";
  var thousands = "";
  var output = "";

  if (input > 3999 || input < 0) {
    alert("Please enter a number between 0 and 3,999");
  } else {
    var inputString = input.toString();
    var digitArray = inputString.split("");
    console.log(digitArray);

    if (digitArray.length === 4) {
      for (var n = 0; n < digitArray[0]; n++) {
        m += "M";
      }
      console.log(m);
    }


    else if (digitArray.length === 3) {
      for (var n = 0; n < digitArray[0]; n++) {
        c += "C";
      }
      if (c.length > 3) {
        d = "D";
        c = "";
        for (var n = 0; n < digitArray[0] - 5; n++) {
          c += "C";
        }
        hundreds = d + c;
      }
      console.log(hundreds);
    }


    else if (digitArray.length === 2) {
      for (var n = 0; n < digitArray[0]; n++) {
        x += "X";
      }
      if (x.length > 3) {
        l = "L";
        x = "";
        for (var n = 0; n < digitArray[0] - 5; n++){
          x += "X";
        }
        tens = l + x;
      }
      console.log(tens);
    }


    else if (digitArray.length === 1) {
      for (var n = 0; n < digitArray[0]; n++) {
        i += "I";
      }
      if (i.length > 3) {
        v = "V";
        i = "";
        for (var n = 0; n < digitArray[0] - 5; n++) {
          i += "I";
        }
        ones = v + i;
        console.log(ones);
      }
    }


  }
  output= thousands + hundreds + tens + ones;
  return output;
}
