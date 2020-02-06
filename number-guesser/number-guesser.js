let prompt = require("prompt-sync")();

const generateRandomNumber = function() {
  return Math.floor(Math.random() * 100);
};

const incrementCounter = function(counter, answer, previousAnswers) {
  for (let i = 0; i < previousAnswers.length; i++) {
    if (previousAnswers[i] === answer) {
      console.log("Already Guessed!");
      return counter;
    }
  }
  counter++;
  return counter;
};

const num = generateRandomNumber();
let counter = 0;
let playing = true;
let answer;
let previousAnswers = [];
while (playing) {
  previousAnswers.push(answer);
  answer = prompt("Guess a number: ");
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
  } else if (answer > num) {
    console.log("Too high!");
    counter = incrementCounter(counter, answer, previousAnswers);
  } else if (answer < num) {
    console.log("Too low!");
    counter = incrementCounter(counter, answer, previousAnswers);
  } else if (answer == num) {
    console.log(`You got it! You took ${counter} attempts!`);
    playing = false;
  }
}
