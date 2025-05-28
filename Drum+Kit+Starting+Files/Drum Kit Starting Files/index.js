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
    this.style.color = "white";
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
