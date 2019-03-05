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
    alert(this.playerName + "you rolled 1!...haha you out")
  }
  else {
    this.interimscore += this.roll;
  }
}
 //tally Total
 player.prototype.tally = function () {
   this.total += this.interimscore
 }
 // check first player reaching 100
 player.prototype.checkwinner = function () {
   if(this.total >= 100) {
     alert("kudos "  + this.playerName + "you made a million bucks");

   }
 }
  //refresh the game
  player.prototype.newGame = function () {
    this.toss = 0;
    this.interimscore = 0;
    this.total = 0;
    this.playerName = "";
  }
  var clearValues = function() {
    $("player1").val("");
    $("player2").val("");
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


    $("button#newgame").click(function(event){
     clearValues();
     player1.newGame();
     player2.newGame();
     $("#die-roll-1").empty();
     $("#sum-1").empty();
     $("#total-1").empty();
     $("#die-roll-2").empty();
     $("#sum-2").empty();
     $("#total-2").empty();
   });
   $("button$first man-roll").click(function(event){
     first man-roll = tossDice();
   }
});
