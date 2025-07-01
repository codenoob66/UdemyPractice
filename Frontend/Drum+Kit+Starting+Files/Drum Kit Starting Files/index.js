let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    addAnimation(buttonInnerHTML);
      

    switch(buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play()
      break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play()
      break;

      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play()
      break;

      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play()
      break;

      case "j":
        let snare = new Audio("sounds/snare.mp3")
        snare.play()
      break;

      case "k":
        let crash = new Audio("sounds/crash.mp3")
        crash.play()
      break;

      case "l":
        let bass = new Audio("sounds/kick-bass.mp3")
        bass.play()
      break;


      default:

    }
  });
}

document.addEventListener("keydown", function(event) {
  const audio = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

const key = event.key.toLowerCase();
    if (audio[key]) {
      const sound = new Audio(audio[key]);
      sound.play();
      addAnimation(event.key)
    }
})


function addAnimation(currentKey) {
 let activeBtn = document.querySelector("." + currentKey);
 activeBtn.classList.add("pressed");


 setTimeout(function() {
  activeBtn.classList.remove("pressed");
 }, 100)
}



