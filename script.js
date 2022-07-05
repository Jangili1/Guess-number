'use strict';
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const btnCheck = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const guess = document.querySelector('.guess');

let presentScore = 20;

btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'No Number';
  } else if (guess === randomNumber) {
    message.textContent = 'Correct Number';
    document.body.style.backgroundColor = 'green';
    number.textContent = randomNumber;
    highscore.textContent = presentScore;
  } else if (guess > randomNumber) {
    if (presentScore > 0) {
      message.textContent = 'Too high';
      presentScore--;
      score.textContent = presentScore;
    } else {
      message.textContent = 'You lost';
    }
  } else if (guess < randomNumber) {
    message.textContent = 'Too low';
    presentScore--;
    score.textContent = presentScore;
  }
});

again.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  score.textContent = 20;
  highscore.textContent = '0';
});
