"use strict";

// computer's choice
const computerPlay = function () {
  // generates a random number between 1 and 3 and selects a case depending on the number
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

// player's choice
const playerSelection = function () {
  // user's input case insensitive
  const userInput = prompt("Select rock, paper or scissors: ").toLowerCase();
  return userInput;
};

let playerScore = 0;
let computerScore = 0;
// game's logic
function game() {
  // run the game i times
  for (let i = 0; i < 5; i++) {
    function playRound(player, computerSelection) {
      if (player !== ("rock" || "scissor" || "paper")) {
        console.log(`invalid input, choose rock, paper or scissor`);
        // decresses the value of i so the player can play the game's set with a valid choice
        i--;
      } else {
        if (
          (player == "rock" && computerSelection == "paper") ||
          (player == "scissors" && computerSelection == "rock") ||
          (player == "paper" && computerSelection == "scissors")
        ) {
          computerScore++;
        } else if (player == computerSelection) {
          return;
        } else {
          playerScore++;
        }
        console.log(
          `player selected: ${player}, computer selected ${computerSelection}`
        );
        console.log(
          `player score: ${playerScore}, computer score: ${computerScore}`
        );
      }
    }

    const computerSelection = computerPlay();
    const player = playerSelection();
    playRound(player, computerSelection);
  }
}
game();
