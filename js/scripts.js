var countUp = function(countTo, countBy) {
  var output = [];
  for(var i = countBy; i <= countTo; i += countBy) {
    output.push(i)
  }
  return output;
};

$(document).ready(function() {
  $("form#count-up-by").submit(function(event) {
    var countBy = parseInt($("input#countBy").val());
    var countTo = parseInt($("input#countTo").val());
    var output = countUp(countTo, countBy);

  $(".countBy").text(countBy);
  $(".countTo").text(countTo);
  $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
