const player1Image = document.getElementsByClassName("img1");
const player2Image = document.getElementsByClassName("img2");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

function displayWinner() {
  const winnerTxt = document.getElementById("h1text");

  winnerTxt.innerHTML = "";
}
