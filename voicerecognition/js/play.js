var config = {
    apiKey: "AIzaSyD0DCsRACVIs2MUYkjfcU3c66-JCRrCeEI",
    authDomain: "rock-paper-scissors-2146d.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-2146d.firebaseio.com",
    storageBucket: "rock-paper-scissors-2146d.appspot.com",
  };

firebase.initializeApp(config);
var dataRef = firebase.database();

dataRef.ref().on('value', function(snapshot) {
  if(snapshot.child("players/a/name").exists()) {
    $("#name1").html(snapshot.val().players.a.name);
  }
})

dataRef.ref().on('value', function(snapshot) {
  if(snapshot.child("players/b/name").exists()) {
    $("#name2").html(snapshot.val().players.b.name);
  }
})



var player = window.player;

function Game() {
  var yourPlayer = [];

  dataRef.ref().on('value', function(snapshot) {
    if(snapshot.child("players/a/choice").exists() && snapshot.child("players/b/choice").exists()) {
      var choice1 = snapshot.val().players.a.choice;
      var choice2 = snapshot.val().players.b.choice;
      compare(choice1, choice2);
    }
  })
  $("#addPlayer").on('click', function() {
      var guy = $('#inputName').val().trim();
        dataRef.ref().once("value", function(snapshot) {
          if(snapshot.val() === null) {
            player = "a"
            window.player = "a"
            yourPlayer.push("a")
          } else {
            player = "b"
            window.player = "b"
            yourPlayer.push("b")
          }

          dataRef.ref('players/'+player).set({
            name: guy,
            wins: 0,
            losses: 0,
            choice: null
          })
          console.log("is "+player)
          var  eep = yourPlayer[0]
          Play(eep);
        })

        $('#inputName').val('');
        return false;
  });





              if(yourPlayer[0] === "a"){
                console.log("yep")
                  $("#player1").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Rock</button>")
                  $("#player1").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Paper</button>")
                  $("#player1").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Scissors</button>")
                  $(".element").on('click', function() {
                    var choice = $(this).text();
                    dataRef.ref('players/a').update({
                      choice: choice
                    })
                    $(".element").not(this).each(function() {
                        $(this).remove();
                    })
                  })
                } else if(yourPlayer[0] === "b") {
                  console.log("no" + player1)
                  $("#player2").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Rock</button>")
                  $("#player2").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Paper</button>")
                  $("#player2").append("<button class='btn btn-primary element col-md-6 offset-md-3 dip'>Scissors</button>")
                  $(".element").on('click', function() {
                    var choice = $(this).text();
                    dataRef.ref('players/b').update({
                      choice: choice
                    })
                    $(".element").not(this).each(function() {
                        $(this).remove();
                    })
                  })

              }



              function compare(choice1, choice2) {
                        var players = [];
                        dataRef.ref().on('value', function(snapshot) {
                          if(snapshot.child("players/a/name").exists() && snapshot.child("players/b/name").exists()) {
                            players.push(snapshot.val().players.a.name);
                            players.push(snapshot.val().players.b.name);
                            }
                        })

                          var playerAWins = 0;
                          var playerALosses = 0;
                          var playerBWins = 0;
                          var playerBLosses = 0;

                          if (choice1 === choice2) {
                              $("#results").html("The result is a tie!");
                              $(".dip").remove();
                              Play(player);
                            }
                          else if (choice1 === "Rock") {
                            if (choice2 === "Scissors") {
                               $("#results").html(players[0] + " wins");
                               Win();
                            }
                            else {
                              $("#results").html(players[1] + " wins");
                              Lose();
                            }
                          }
                          else if (choice1 === "Paper") {
                            if (choice2 === "Rock") {
                              $("#results").html(players[0] + " wins");
                              Win();
                            }
                            else {
                              $("#results").html(players[1] + " wins");
                              Lose();
                            }
                          }
                          else if (choice1 === "Scissors") {
                            if (choice2 === "Paper") {
                              $("#results").html(players[0] + " wins");
                              Win();
                                }
                            else {
                              $("#results").html(players[1] + " wins");
                              Lose();
                            }
                          }

                      function Win() {
                        playerAWins +=1;
                        playerBLosses +=1;
                        $(".dip").remove();
                        Play(player);
                      }
                      function Lose() {
                        playerBWins +=1;
                        playerALosses +=1;
                        $(".dip").remove();
                        Play(player);
                      }

                        dataRef.ref().on("value", function(snapshot) {
                            dataRef.ref('players/a').update({
                              wins: playerAWins,
                              losses: playerALosses
                            })
                            dataRef.ref('players/b').update({
                              wins: playerBWins,
                              losses: playerBLosses
                            })
                          })




                        };














}














/*********RPS***********/
