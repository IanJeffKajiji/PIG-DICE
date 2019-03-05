
$(document).ready(function() {
    $("#info form").submit(function(event) {
        var player1input = $("input#player1").val();
        $(".player1").append(player1Input);
        $("#story").show();
});

        $("#info form").submit(function(event) {
            var player2input = $("input#player2").val();
            $(".player2").append(player2Input);
            $("#story").show();

  event.preventDefault();
});
}
