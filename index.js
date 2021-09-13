let firstCard = 0;
let secondCard = 0;
let sum = 0;
let cards = [];
let startEl = document.getElementById("start-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.querySelector("#message-el");
//getElementById and querySelector here works the same
let cardsEl = document.getElementById("cards-el");
let hasBlackJack = false;
let isAlive = true;

let player = { name: "Kc", chips: 145 };
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//Get random number
function getRandom() {
  let randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum === 1) {
    randomNum = 11;
  } else if (randomNum > 10) {
    randomNum = 10;
  } else {
    randomNum = randomNum;
  }
  return randomNum;
}

//Starting game
function start() {
  firstCard = getRandom();
  secondCard = getRandom();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

//Start game code
function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got a blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  counting = () => {
    for (let i = 0; i < cards.length + 1; i++) {
      return (cardsEl.textContent = "Cards: " + cards);
    }
  };

  // Render out first and second card
  counting();
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  if (isAlive === true && hasBlackJack == false) {
    let card = getRandom();
    sum = card + sum;
    renderGame();
    cards.push(card);
  }

  // Render out all the cards being used
  counting();
}
