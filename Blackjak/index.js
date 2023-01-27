const cards = [];
let sumNumbers = 0;
const numbersEl = document.getElementById("cards");
const sumEl = document.getElementById("sum");
const messageEl = document.getElementById("message");
const startEl = document.getElementById("start-btn");
const playerEl = document.getElementById("player");
let message = "";
let isAlive = false;
let isBlackjack = false;
let isStartGame = false;
const player = {
  name: "ibrahim",
  chips: 100,
};

numbersEl.textContent = "Cards: ";
sumEl.textContent = "Sum: ";

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) return 10;
  else return randomNumber;
}

function renderGame() {
  numbersEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
  for (let i = 0; i < cards.length; i++) {
    numbersEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent += sumNumbers;

  if (sumNumbers > 21) {
    message = "Game Over!";
    isAlive = false;
  } else if (sumNumbers < 21) {
    isAlive = true;
    message = "Do you want new card?";
  } else {
    isBlackjack = true;
    message = "You've got Blackjack!";
  }

  messageEl.textContent = message;
}

function startGame() {
  if (!isStartGame) {
    playerEl.textContent = `${player.name} : $${player.chips}`;
    isStartGame = true;
    startEl.style.display = "none";
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    cards.push(firstNumber, secondNumber);
    sumNumbers = firstNumber + secondNumber;
    numbersEl.textContent += `${firstNumber} ${secondNumber}`;
    sumEl.textContent += sumNumbers;
    renderGame();
  }
}

function newCard() {
  if (isStartGame && isAlive) {
    const newNumber = getRandomNumber();
    cards.push(newNumber);
    sumNumbers += newNumber;
    renderGame();
  }
}
