"use strict";

// define elements
let rollButton = document.querySelector(".btn--roll");
let holdButton = document.querySelector(".btn--hold");
let resetButton = document.querySelector(".btn--new");
let backButton = document.querySelector(".btn--back");

let rollDisplay = document.querySelector(".dice");
let scores = document.querySelectorAll(".score");
let currentScores = document.querySelectorAll(".current-score");
let players = document.querySelectorAll(".player");

//variables
let playerNum = 0;
let diceRoll;
let currentScoresCount = [0, 0];
let scoresCount = [0, 0];
let playing = true;

rollDisplay.classList.add("hidden");
//user rolls rice
rollButton.addEventListener("click", function () {
  if (playing) {
    diceRoll = rollDice();
    //display dice roll
    rollDisplay.src = `dice-${diceRoll}.png`;
    rollDisplay.classList.remove("hidden");
    if (diceRoll === 1) {
      //reset the current score and swithc player
      playerNum = switchPlayer(playerNum);
    } else {
      //add to current score and display
      currentScoresCount[playerNum] += diceRoll;
      currentScores[playerNum].textContent = currentScoresCount[playerNum];
    }
  }
});

//user holds dice
holdButton.addEventListener("click", function () {
  if (playing) {
    //add to total score
    scoresCount[playerNum] += currentScoresCount[playerNum];
    //display
    scores[playerNum].textContent = scoresCount[playerNum];
    //check win condition
    if (scoresCount[playerNum] >= 20) {
      document.getElementById("name--1").textContent = `PLAYER ${
        playerNum + 1
      } WON`;
      document.getElementById("name--0").textContent = `PLAYER ${
        playerNum + 1
      } WON`;

      players[playerNum].classList.toggle("player--winner");
      players[playerNum].classList.toggle("player--active");
      playing = false;
    }
    //switch player and reset current scores
    playerNum = switchPlayer(playerNum);
  }
});

//user resets game
resetButton.addEventListener("click", function () {
  scoresCount = [0, 0];
  currentScoresCount = [0, 0];
  playerNum = switchPlayer(playerNum);
  scores[0].textContent = 0;
  scores[1].textContent = 0;
});

//user goes back to main page
backButton.addEventListener("click", function () {
  window.location.href = "/MAIN/index.html";
});

//is it not add dice to current score and display new score

function rollDice() {
  let dice = Math.floor(Math.random() * 6 + 1);
  return dice;
}
function switchPlayer(playerNum) {
  rollDisplay.classList.add("hidden");
  currentScoresCount[playerNum] = 0;
  currentScores[playerNum].textContent = currentScoresCount[playerNum];
  //reset style.
  players.forEach(function (player) {
    player.classList.toggle("player--active");
  });

  if (playerNum == 0) return 1;
  else return 0;
}
