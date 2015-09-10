var countUp = function(countTo, countBy) {
  var output = [];
  for(var i = countBy; i <= countTo; i += countBy) {
    output.push(i)
  }
  return output
};

$(document).ready(function() {
  $("form#count-up-by").submit(function(event) {
    var countBy = $("input#countBy").val();
    var countTo = $("input#countTo").val();
    var output = countUp(countBy, countTo);

  $(".countBy").text(countBy);
  $(".countTo").text(countTo);
  $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
