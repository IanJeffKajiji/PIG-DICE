$(document).ready(function() {
  $("#info form").submit(function(event) {
    var player1Input1 = ("input#player1").val();
    $(".player1").append(player1Input);
    $("#story").show();

    event.preventDefault();
  });
});
