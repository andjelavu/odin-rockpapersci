function getComputerChoice() {
  var options = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  var randomString = options[randomIndex];
  return randomString;
}

// Function to play one round of the game
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
  var winner = null;
  var resultDisplay = document.querySelector("#result");
  const buttons = document.querySelectorAll(".buttons button");
  const restartButton = document.querySelector(".restart");
  let h1Elem = document.querySelector("#h1-element");
  restartButton.style.display="none";
  buttons.forEach((button)=>{
    button.addEventListener("click", ()=> {
      const playerSelection = button.id;
      var computerSelection = getComputerChoice();
      var result = oneRound(playerSelection, computerSelection);

      console.log("Player chose: " + playerSelection);
      console.log("Computer chose: " + computerSelection);
      //console.log(result);

      if (result === "Player won!") {
        playerScore++;
      } else if (result === "Computer won!") {
        computerScore++;
      }

      resultDisplay.innerHTML = `<span class="res">${result}<span><p class="scores">
      Player: <span class="score">${playerScore}</span><br>
       Computer: <span class="score">${computerScore}</span></p>
      <small>[ ${playerSelection} vs ${computerSelection} ]</small>`;

      if (playerScore === 5) {
        winner = "Player";
      } else if (computerScore === 5) {
        winner = "Computer";
      }

      if (winner) {
        startConfetti();
        h1Elem.style.display="none";
        restartButton.disabled=false;
        if(winner=="Computer"){
          resultDisplay.innerHTML = `<h2 class="winner">Computer won! More luck next time..`;

        }else{
          resultDisplay.innerHTML = `<h2 class="winner">Congrats! You won.`;
        }
        buttons.forEach((button) => {
          button.style.display="none";
        });
        restartButton.style.display = "block";
      }
    });
  });
  restartButton.addEventListener("click", ()=> {
    stopConfetti();
    playerScore = 0;
    computerScore = 0;
    winner = null;
    resultDisplay.textContent = "";
    h1Elem.style.display="block";
    buttons.forEach((button) => {
      button.disabled = false;
      button.style.display = "block";
    });
    restartButton.style.display = "none";
  });
}

game();
