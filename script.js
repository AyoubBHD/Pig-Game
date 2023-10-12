'use strict';

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

roll.addEventListener('click', () => {
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${dice1}.png`;
  dice.classList.remove('hidden');

  if (dice1 !== 1) {
    currentScore += dice1;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

hold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    playing = false;
    document.querySelector(`#name--${activePlayer}`).textContent = 'Winner!';
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

const init = () => {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  dice.classList.add('hidden');
  scores = [0, 0];
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

newGame.addEventListener('click', () => {
  init();
});
