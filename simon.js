var numClick = -1;
var userPattern = [];
var correctPattern = [];
var possibleColours = ["red","green","blue","yellow"];
var level = 0;
var highScore = 0;

$(".btn").click(function(buttonClicked){
  numClick++;
 let randomColor  = buttonClicked.target.id;
 clickAnimation(randomColor);
 makesound(randomColor);
 checkAnswer(randomColor);
});

function checkAnswer(randomColor){
  userPattern.push(randomColor);
  if(randomColor === correctPattern[numClick]){
    if(userPattern.length === correctPattern.length){
      setTimeout(function(){
        userPattern = [];
        numClick = -1;
        nextSequence();
      },1000);
    
    }
    }else{
      $("h2").text("gameover, try again");
      userPattern = [];
      correctPattern = [];

      if(level > highScore){
        highScore = level;
        $("#highScore").text(level);
      }
      level = 0;
      numClick = -1;
  }
}
 
function nextSequence(){
  level++;
  $("#level").text(level);
  var rand = Math.floor(Math.random() *4);
  var randomColor = possibleColours[rand];
  correctPattern.push(randomColor);
  makesound(randomColor);
  clickAnimation(randomColor);
  
}

function makesound(randomColor){
  var audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();
}

function clickAnimation(randomColor){
  $("." + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(document).keydown(function(){
  if(level <= 0){
    $("h2").text("The Game Begins!!");
  nextSequence();
  }
});




// $(".gamestart-btn").click(function(){
//     window.location.reload();
//  });

