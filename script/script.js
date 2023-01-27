//elements
const inputEl = document.querySelector(".user-input");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".error-message");
const btnSubmit = document.querySelector(".btn-submit");

//  global variables
const randomNumber = Math.floor(Math.random() * 100 + 1);

let score = 20;

//functions
const displayMessage = function (message, color) {
  messageEl.style.display = "block";
  messageEl.style.color = color;
  messageEl.innerText = message;
};

//eventListeners
btnSubmit.addEventListener("click", function () {
  const userInput = Math.ceil(Number(inputEl.value));
  console.log(userInput);

  if (userInput < 1 || userInput > 100) {
    displayMessage("Enter a Valid Input", "red");
  } else {
    if (score > 1) {
      if (userInput === randomNumber) {
        displayMessage(`You Won, Score is ${score}`, "green");
        guessEl.innerText = randomNumber;
      } else {
        let message = `Your Guess is ${
          userInput > randomNumber ? "greater" : "lower"
        }`;

        displayMessage(message, "red");
        score = score - 1;
        scoreEl.innerText = score;
      }
    } else {
      displayMessage("GAME OVER", "red");
      guessEl.innerText = randomNumber;
    }
  }
});
