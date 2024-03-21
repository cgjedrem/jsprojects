"use strict";

const team1Name = document.querySelector(".name1");
const team2Name = document.querySelector(".name2");
const team1List = document.querySelector(".players1");
const team2List = document.querySelector(".players2");
const backButton = document.querySelector(".back");
const goalButton = document.querySelector(".checkGoal");
const goalText = document.querySelector(".goal");
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

team1Name.textContent = game.team1;
team2Name.textContent = game.team2;

const players1 = game.players[0];
const players2 = game.players[1];

console.log(team1List);

players1.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  team1List.appendChild(li);
});

players2.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  team2List.appendChild(li);
});

backButton.addEventListener("click", () => {
  window.location.href = "/MAIN/index.html";
});

let playerNum = 0;
goalButton.addEventListener("click", () => {
  let text;
  if (playerNum == players1.length) {
    text = `total ${playerNum} goals scored`;
    playerNum = 0;
  } else {
    text = printGoals(players1[playerNum]);
  }

  goalText.textContent = text;
  playerNum += 1;
});

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...fieldPlayers1, ...fieldPlayers2];

const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];

const { team1, x: odd, team2 } = game.odds;

function printGoals(player) {
  return `${player} scored a goal`;
}
