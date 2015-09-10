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

var romanNumeralX = function(number) {
  var output = [];
  while(number >= 10) {
    output.push("X");
    number -= 10;
  }
  return output;
};

var romanNumeralL = function(number) {
  var output = [];
  while(number >= 50) {
    output.push("L");
    number -= 50;
  }
  return output;
};
