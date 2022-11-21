"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const numberDiv = document.querySelector(".number");

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  // When there is not input
  if (!guess) {
    setMessage("⛔️ No number!");
    // when player wins
  } else if (guess === secretNumber) {
    setMessage("🏆 Correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberDiv.style.width = "30rem";
    numberDiv.textContent = secretNumber;
    // set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      setMessage("💥 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  numberDiv.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  numberDiv.style.width = "15rem";
});
