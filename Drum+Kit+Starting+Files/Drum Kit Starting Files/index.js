// const audio = {
//   w: "sounds/tom-1.mp3",
//   a: "sounds/tom-2.mp3",
//   s: "sounds/tom-3.mp3",
//   d: "sounds/tom-4.mp3",
//   j: "sounds/snare.mp3",
//   k: "sounds/crash.mp3",
//   l: "sounds/kick-bass.mp3",
// };

// window.addEventListener("load", function () {
//   // Add keydown listener to the whole document
//   document.addEventListener("keydown", function (event) {
//     const key = event.key.toLowerCase();
//     if (audio[key]) {
//       const sound = new Audio(audio[key]);
//       sound.play();
//     }
//   });

//   // Optional: Add click listeners to buttons too
//   const buttons = document.querySelectorAll(".drum");
//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const key = this.textContent.toLowerCase();
//       if (audio[key]) {
//         const sound = new Audio(audio[key]);
//         sound.play();
//       }
//     });
//   });
// });

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
      

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
    }

})

if(key === "w") {
  const sound = new Audio("sounds/tom-1.mp3")
  sound.play()
}



