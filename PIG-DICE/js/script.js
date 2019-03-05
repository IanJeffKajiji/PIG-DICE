 // business logic

  var player1 ="";
  var player2 ="";
  var tossDice = function() {
    return math.floor(6*math.random())+1;
  }
   //creating a constructor
 function player(turn) {
   this.toss = 0;
   this.interimscore = 0;
   this.total = 0;
   this.turn =turn;
   this.playername;
 }
   //roll 1
player.prototype.rollone = function() {
  if(this.toss === 1) {
    this.interimscore = 0;
    alert(this.playerName + "you rolled 1!...haha you lost")
  }
  else {
    this.interimscore += this.roll;
  }
}

  // user interface
  $(document).ready(function() {
    $("#info1 form").submit(function(event) {
      var player1Input = $("input#player1").val();
      var player2Input = $("input#player2").val();
      $(".player1").text(player1Input);
      $(".player2").text(player2Input);

      $("#story").show();

      event.preventDefault();
    });
});
