const buttonColor = ["red", "blue", "green", "yellow"]
const gammePattern = []



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColor[randomNumber]
    $("#" + randomChosenColor).delay(100).fadeOut().fadeIn('slow')
    gammePattern.push(randomChosenColor)
    console.log(randomNumber)
    console.log(randomChosenColor)
    console.log(gammePattern)
}
nextSequence();
