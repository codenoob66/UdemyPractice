const player1Image = document.getElementById("img1");
const player2Image = document.getElementById("img2");

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

let player1 = randomNumber();
let player2 = randomNumber();

player1Image.setAttribute("src", `images/dice${player1}.png`);

player2Image.setAttribute("src", `images/dice${player2}.png`);

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
