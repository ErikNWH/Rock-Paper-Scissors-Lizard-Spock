const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';

// Reset all Selected Icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Random Computer Choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'Rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'Paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'Scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'Lizard';
  } else if (computerChoiceNumber > 0.8) {
    computerChoice = 'Spock';
  }
  console.log(computerChoiceNumber);
}

// Add 'selected styling & computer choice

function displayComputerChoice() {
  // Add 'selected' Styling & playerChoice
  switch (computerChoice) {
    case 'Rock':
      computerRock.classList.add('selected');
      computerChoiceEL.textContent = `---${computerChoice}`;
      break;
    case 'Paper':
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = `---${computerChoice}`;
      break;
    case 'Scissors':
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = `---${computerChoice}`;
      break;
    case 'Lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = `---${computerChoice}`;
      break;
    case 'Spock':
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = `---${computerChoice}`;
      break;
    default:
      break;
  }

  console.log(computerChoice);
}

// Call functions to process turn
function checkResult() {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult();
  // Add 'selected' Styling & playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEL.textContent = '--- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = '--- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEL.textContent = '--- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = '--- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = '--- Spock';
      break;
    default:
      break;
  }
}
