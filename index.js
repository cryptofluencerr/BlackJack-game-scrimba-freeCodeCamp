let firstCard = Math.floor(Math.random() * 10 + 1);
let secondCard = Math.floor(Math.random() * 10 + 1);

let sum = firstCard + secondCard + 6;
console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Wohoo! You've got a blackjack! ");
} else {
  console.log("You're out of the game!");
}
