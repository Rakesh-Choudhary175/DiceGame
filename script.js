'use strict';

//Important Elements from HTML stored

const newGame = document.querySelector('.btn--new');

const dice = document.querySelector('.btn--roll');

const hold = document.querySelector('.btn--hold');

const score = document.querySelectorAll('.score');

const currentScore = document.querySelectorAll('.current-score');

const player = document.querySelectorAll('.player');

//Important varables

let diceRoll = Math.floor(Math.random() * 6) + 1;

let activePlayer = 0;

// Important functions defined

const resetScore = () => {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
  }
};

const resetDice = () => {
  for (let i = 0; i < currentScore.length; i++) {
    currentScore[i].textContent = 0;
  }
};

const changePlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else activePlayer = 0;
  for (let i = 0; i < player.length; i++) {
    if (player[i].classList.contains('player--active')) {
      player[i].classList.remove('player--active');
    } else {
      player[i].classList.add('player--active');
    }
  }
};

// Button action code

newGame.addEventListener('click', function () {
  player[1].classList.remove('player--active');
  player[0].classList.add('player--active');
  activePlayer = 0;
  resetScore();
  resetDice();
});

dice.addEventListener('click', function () {
  diceRoll = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.dice').src = `dice-${diceRoll}.png`;

  if (diceRoll != 1) {
    currentScore[activePlayer].textContent =
      Number(currentScore[activePlayer].textContent) + diceRoll;
  } else {
    currentScore[activePlayer].textContent = 0;
    changePlayer();
  }

  // console.log(currentScore[activePlayer].textContent);

  // console.log(diceRoll);
});

hold.addEventListener('click', function () {
  score[activePlayer].textContent =
    Number(score[activePlayer].textContent) +
    Number(currentScore[activePlayer].textContent);

  currentScore[activePlayer].textContent = 0;

  if (Number(score[activePlayer].textContent) >= 100) {
    player[activePlayer].classList.add('player--winner');
  }

  changePlayer();
  resetDice();
});
