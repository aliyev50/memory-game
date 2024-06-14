const gameBoard = document.getElementById("gameBoard");
const message = document.getElementById("message");
const timerElement = document.getElementById("timer");
const wrongGuessesElement = document.getElementById("wrongGuesses");
const symbols = ["🧭", "🌎", "✈️", "🗺️", "🏕️", "🧳", "🚁", "🌞"];
const maxWrongGuesses = 20;

let cards = [];
let flippedCards = [];
let matchedCards = [];
let wrongGuesses = 0;
let timer;
let timeLeft = 100; // 100 seconds


function startingTheGame() {
  cards = mixCards([...symbols, ...symbols]);
  // Generate the card elements and add them to the game board
  makeCards();
  startTimer();
}

function mixCards(array) {
  // Loop through the array from the last element to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
     // Change the elements at index i and index j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeCards () {
   // Clear existing content in the game board
  gameBoard.innerHTML = ""; 
  // Iterate over each symbol in the mixed cards array
  cards.forEach((symbol) => {
     // Create a new div element for each card
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard(event) {
  const card = event.target;

  if (
    card.classList.contains("flipped") ||
    card.classList.contains("matched") ||
    flippedCards.length === 2
  ) {  
    return;
  }

  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      endGame("You Win!");
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.textContent = "";
      card2.textContent = "";
      flippedCards = [];
      wrongGuesses++;
      updateWrongGuesses();
      if (wrongGuesses >= maxWrongGuesses) {
        endGame("You Lose!");
      }
    }, 1000);
  }
}

function startTimer() {
  // Set the interval to call the function every 1000 milliseconds (1 second)
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            endGame("Time's Up! You Lose!");
        }
    }, 1000);
}

function updateWrongGuesses() {
    wrongGuessesElement.textContent = `Wrong Guesses: ${wrongGuesses}`;
}

function endGame(result) {
    clearInterval(timer);
    message.innerHTML = result; // Display the result message
    document.querySelectorAll(".card")
    document.forEach((card) => card.removeEventListener("click", flipCard));
}



window.onload = startingTheGame

