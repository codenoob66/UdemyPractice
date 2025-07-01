const buttonColor = ["red", "blue", "green", "yellow"]
const gamePattern = []
let  userClickedPattern = []
let gameStarted = false;
let level = 0;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColor[randomNumber]
    playSound(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColor)
    console.log(randomNumber)
    console.log(randomChosenColor)
    console.log(gamePattern) 
}


$(".btn").click(function() {
  let userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  console.log(userClickedPattern)
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    let audio = new Audio("sounds/" + name +  ".mp3")
    audio.play()
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


$(document).keypress(function() {
  if (!gameStarted) {
    gameStarted = true;
    level = 0;
    gamePattern.length = 0;
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      console.log("success");
      setTimeout(function() {
        nextSequence();
      }, 1000);
      // No need to reset userClickedPattern here, it's done in nextSequence()
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern.length = 0;
  gameStarted = false;
}