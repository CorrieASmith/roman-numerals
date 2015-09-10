var romanNumeral = function(number) {
  var output = [];
  while(number >= 1000) {
    output.push("M");
    number -= 1000;
  }
  while(number >= 500) {
    output.push("D");
    number -= 500;
  }
  while(number >= 100) {
    output.push("C");
    number -= 100;
  }
  while(number >= 50) {
    output.push("L");
    number -= 50;
  }
  while(number >= 10) {
    output.push("X");
    number -= 10;
  }
  while(number >= 5) {
    output.push("V");
    number -= 5;
  }
  while(number >= 1) {
    output.push("I");
    number -= 1;
  }
  return output;
};


$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var number = parseInt($("input#number").val());
    var output = romanNumeral(number);

  $(".number").text(number);
  $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
