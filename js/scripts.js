var romanNumeralI = function(number) {
  var output = [];
  while(number >= 1) {
    output.push("I");
    number -= 1;
  }
  return output;
};

var romanNumeralV = function(number) {
  var output = [];
  while(number >= 5) {
    output.push("V");
    number -= 5;
  }
  return output;
};
