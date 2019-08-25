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
  var ones = "";
  var tens = "";
  var hundreds = "";
  var thousands = "";
  var digitArray = input.toString().split("");
  console.log(digitArray);
  if (digitArray.length === 4) {               //If input is a four-digit number...
    thousands = calcThousands(digitArray[0]);  //Calculate the thousands place (which is digitArray[0])
    hundreds = calcHundreds(digitArray[1]);    //Calculate the hundreds place (which is digitArray[1])
    tens = calcTens(digitArray[2]);            //Calculate the tens place (which is digitArray[2])
    ones = calcOnes(digitArray[3]);            //Calculate the ones place (which is digitArray[3])
  } else if (digitArray.length === 3) {        //If input is a three-digit number...
    hundreds = calcHundreds(digitArray[0]);    //Calculate the hundreds place (which is digitArray[0])
    tens = calcTens(digitArray[1]);            //Calculate the tens place (which is digitArray[1])
    ones = calcOnes(digitArray[2]);            //Calculate the ones place (which is digitArray[2])
  } else if (digitArray.length === 2) {        //If input is a two-digit number...
    tens = calcTens(digitArray[0]);            //Calculate the tens place (which is digitArray[0])
    ones = calcOnes(digitArray[1]);            //Calculate the ones place (which is digitArray[1])
  } else if (digitArray.length === 1) {        //If input is a single-digit number...
    ones = calcOnes(digitArray[0]);            //Calculate the ones place (which is digitArray[0])
  }
  var output = thousands + hundreds + tens + ones;
  return output;
}

function calcThousands(digit) {     //Definition of the function to calculate the thousands place
  var thousands = "";
  for (var n = 0; n < digit; n++) {
    thousands += "M";
  }
  return thousands;
}

function calcHundreds(digit) {      //Definition of the function to calculate the hundreds place
  var c = "";
  var d = "";
  var m = "";
  var hundreds = "";
  for (var n = 0; n < digit; n++) {
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
    for (var n = 0; n < digit - 5; n++) {
      c += "C";
    }
    hundreds = d + c;
  } else {
    hundreds = c;
  }
  return hundreds;
}

function calcTens(digit) {      //Definition of the function to calculate the tens place
  var x = "";
  var l = "";
  var c = "";
  var tens = "";
  for (var n = 0; n < digit; n++) {
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
    for (var n = 0; n < digit - 5; n++) {
      x += "X";
    }
    tens = l + x;
  } else {
    tens = x;
  }
  return tens;
}

function calcOnes(digit) {      //Definition of the function to calculate the ones place
  var i = "";
  var v = "";
  var x = "";
  var ones = "";
  for (var n = 0; n < digit; n++) {
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
    for (var n = 0; n < digit - 5; n++) {
      i += "I";
    }
    ones = v + i;
    console.log(ones);
  } else {
    ones = i;
  }
  return ones;
}
