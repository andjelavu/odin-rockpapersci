function getComputerChoice() {
  var options = ["Rock", "Paper", "Scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  var randomString = options[randomIndex];

  return randomString;
}
function oneRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "PAPER") {
      return "Computer won!";
    } else {
      return "Player won!";
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "SCISSORS") {
      return "Computer won!";
    } else {
      return "Player won!";
    }
  } else if (playerSelection == "SCISSORS") {
    if (computerSelection == "ROCK") {
      return "Computer won!";
    } else {
      return "Player won!";
    }
  }
}
function game() {
  var playerScore = 0;
  var computerScore = 0;

  for (var i = 0; i < 5; i++) {
    var playerSelection = prompt("Choose Rock, Paper, or Scissors:").toUpperCase();
    var computerSelection = getComputerChoice();
    var result = oneRound(playerSelection, computerSelection);

    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log(result);

    if (result === "Player won!") {
      playerScore++;
    } else if (result === "Computer won!") {
      computerScore++;
    }
  }

  console.log("Final score:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game ends in a tie.");
  }
}

game();
