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
  if (input > 3999 || input < 0) {
    alert("Please enter a number between 0 and 3,999");
  } else {
    for(var i=0; i<input; i++){
      output += "I";

    }
  }
  return output;
}
