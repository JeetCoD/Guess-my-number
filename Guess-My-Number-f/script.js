'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = "☹️ No number !"
  }
  //when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '😭 You lost the game!';
      }
    }
  } 

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {

  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //   }

  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});