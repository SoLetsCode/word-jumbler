function wordJumbler(sentence) {
  let jumbledSentence = "";
  let randomIndex = getRandomInt(sentence.length - 1);

  if (sentence.length === 0) {
    return "Hey you didn't put anything in";
  }

  while (sentence.length > 0) {
    randomIndex = getRandomInt(sentence.length - 1);
    jumbledSentence += sentence.charAt(randomIndex);
    sentence = removeLetter(sentence, randomIndex);
  }

  return jumbledSentence;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function removeLetter(sentence, index) {
  return sentence.substr(0, index) + sentence.substr(index + 1);
}

// adding event listener for submit button

document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault();
  let userInput = event.target.userinput.value;
  event.target.reset();

  document.querySelector(".output").innerHTML = wordJumbler(userInput);
});

//adding event listener for enter to send mesages.

document.querySelector(".form__user-input").addEventListener("keyup", event => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".form__input-button").click();
  }
});

//adding event listener for dark mode button

document.querySelector(".dark-mode-button").addEventListener("click", event => {
  document.querySelector(".container").classList.toggle("dark-mode-background");
  document.querySelector(".title").classList.toggle("dark-mode-text");
  document.querySelector(".output").classList.toggle("dark-mode-text");
  document
    .querySelector(".form__user-input")
    .classList.toggle("dark-mode-user-input");

  event.target.innerHTML === "Dark Mode"
    ? (event.target.innerHTML = "Light Mode")
    : (event.target.innerHTML = "Dark Mode");
});
