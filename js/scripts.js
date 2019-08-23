//USER INTERFACE
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number-input").val());
    var output = "";
    if (input > 3999 || input < 1) {
      output = "Please enter a number between 0 and 4,000.";
    } else {
      output = convertToRoman(input);
    }
    $("#output").text(output);
  });
});

//BUSINESS LOGIC
function convertToRoman(input) {
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
  var inputString = input.toString();
  var digitArray = inputString.split("");
  console.log(digitArray);

  if (digitArray.length === 4) {      //IF INPUT IS A FOUR-DIGIT NUMBER
    for (var n = 0; n < digitArray[0]; n++) {
      thousands += "M";
    }
    console.log(thousands);
  } else if (digitArray.length === 3) {     //IF INPUT IS A TRIPLE-DIGIT NUMBER
    for (var n = 0; n < digitArray[0]; n++) {
      c += "C";
    }
    if (c.length === 4) {
      d = "D";
      c = "C";
      hundreds = c + d;
    } else if (c.length === 9) {
      m = "M";
      c = "C";
      hundreds = c + m;
    } else if (c.length > 3) {
      d = "D";
      c = "";
      for (var n = 0; n < digitArray[0] - 5; n++) {
        c += "C";
      }
      hundreds = d + c;
    } else {
      hundreds = c;
    }
    console.log(hundreds);
  } else if (digitArray.length === 2) {     //IF INPUT IS A DOUBLE-DIGIT NUMBER
    for (var n = 0; n < digitArray[0]; n++) {
      x += "X";
    }
    if (x.length === 4) {
      l = "L";
      x = "X";
      tens = x + l;
    } else if (x.length === 9) {
      c = "C";
      x = "X";
      tens = x + c;
    } else if (x.length > 3) {
      l = "L";
      x = "";
      for (var n = 0; n < digitArray[0] - 5; n++){
        x += "X";
      }
      tens = l + x;
    } else {
      tens = x;
    }
    console.log(tens);
  } else if (digitArray.length === 1) {     //IF INPUT IS A SINGLE-DIGIT NUMBER
    for (var n = 0; n < digitArray[0]; n++) {
      i += "I";
    }
    if (i.length === 4) {
      v = "V";
      i = "I";
      ones = i + v;
      console.log(ones);
    } else if (i.length === 9) {
      x = "X";
      i = "I";
      ones = i + x;
      console.log(ones);
    } else if (i.length > 3) {
      v = "V";
      i = "";
      for (var n = 0; n < digitArray[0] - 5; n++) {
        i += "I";
      }
      ones = v + i;
      console.log(ones);
    } else {
      ones = i;
    }
  }

  output = thousands + hundreds + tens + ones;
  return output;
}
