"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "You guessed correctly ";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 22;
console.log(document.querySelector(".guess").value);
*/
let thisGamesNumber = getMyNumber();
let score = 20;
setScore(score);

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    setMessage("No number 👎");
  } else if (guess > 20 || guess < 1) {
    setMessage("Number outside range 👎");
  } else {
    if (guess > thisGamesNumber) {
      setMessage("Too high ⬇️ ");
      score--;
      setScore(score);
    }

    if (guess < thisGamesNumber) {
      setMessage("Too low ⬇️");
      score--;
      setScore(score);
    }

    if (guess == thisGamesNumber) {
      setMessage("️You guessed correctly 🎆 ");
      score++;
      setScore(score);

      if (document.querySelector(".highscore").textContent < score) {
        document.querySelector(".highscore").textContent = score;
      }

      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = thisGamesNumber;
      document.querySelector(".number").style.width = "30rem";
    }
    if (score <= 0) {
      setMessage("️You lost 🤯");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  thisGamesNumber = getMyNumber();
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  setScore(score);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  setMessage("Start guessing ...");
});

//navigation
document.querySelector(".back").addEventListener("click", function () {
  window.location.href = "/MAIN/index.html";
});

//functions
function getMyNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function setScore(score) {
  document.querySelector(".score").textContent = score;
}

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}
