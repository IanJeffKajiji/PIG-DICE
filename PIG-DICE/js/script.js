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
  //tally rolls to allow next player
  player.prototype.tally = function (){
    this.total += this.interimscore
    this.interimscore
  }
   //check first player reaching 100
   player.prototype.checkwinnner = function (){
     if(this.total >= 100) {
       alert("Kudos" + this,playerName + "you made a million bucks")
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
    $("button#first man-roll").click(function(event){
      player1.toss = tossDice();
      $("#die=roll-1").text(player1.toss);
      player1.rollone();
      $("#sum-1").text(player1.interimscore);
    });
    $("button#last man-roll").click(function(event){
      player1.toss = tossDice();
      $("#die=roll-2").text(player2.toss);
      player2.rollone();
      $("#sum-2").text(player2.interimscore);
    });
    $("button#first man-tally").click(function(event){
      player1.tally();
      $("#total-1").text(player1.total);
      $("#sum-1").empty();
      $("#die-roll-1").empty();
      player1.checkwinner();
    });
    $("button#last man-tally").click(function(event){
      player2.tally();
      $("#total-2").text(player1.total);
      $("#sum-2").empty();
      $("#die-roll-2").empty();
      player1.checkwinner();
    });
});
