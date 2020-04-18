// eslint-disable-next-line import/extensions
import cardsArray from './cards.js';

const gameState = {
  isStartPage: true,
  isGameMode: false,
  isGame: false,
  wasWrong: false,

};

const cardsContainer = document.getElementById('cards-container');
const nav = document.getElementById('nav');
const toggleNavLabel = document.getElementById('toggle-nav-label');
const toggleNav = document.getElementById('toggle-nav');
const navList = document.getElementById('nav-list');
const audio = document.getElementById('audio');
const audioAlerts = document.getElementById('audio-alerts');
const toggleStateLabel = document.getElementById('toggle-state');

const playContainer = document.getElementById('play-container');
const playButton = document.getElementById('play-button');
const repeatContainer = document.getElementById('repeat-container');
let guessedCards = [];
let cards = [];
const buttonCloseWin = document.getElementById('button-close-win');
const winSection = document.getElementById('win-section');
const buttonCloseLose = document.getElementById('button-close-lose');
const loseSection = document.getElementById('lose-section');

let currentCardCounter = 0;
const thumbsUp = '<img src="./src/img/thumbs_up.png" class="thumbs-img" alt="">';
const thumbsDown = '<img src="./src/img/thumbs_down.png" class="thumbs-img" alt="">';
const scoreContainer = document.getElementById('score-container');

let currentCardsArray = [];
let currentCard = {};

const playCard = function () {
  if (currentCardCounter >= currentCardsArray.length) {
    return;
  }
  currentCard = currentCardsArray[currentCardCounter];
  audio.src = currentCard.audio;
  audio.play();
};

function playWin() {
  audioAlerts.src = './src/mp3/win.mp3';
  audioAlerts.play();
  winSection.classList.remove('visually-hidden');
}

function playLose() {
  audioAlerts.src = './src/mp3/lose.mp3';
  audioAlerts.play();
  loseSection.classList.remove('visually-hidden');
}

const cardCorrect = function (chosenCard) {
  scoreContainer.innerHTML = thumbsUp + scoreContainer.innerHTML;
  audioAlerts.src = './src/mp3/correct.mp3';
  audioAlerts.play();
  currentCardCounter += 1;
  chosenCard.classList.add('card-guessed');
  guessedCards.push(chosenCard);
  if (currentCardCounter === cards.length - 5) {
    if (!gameState.wasWrong) {
      setTimeout(playWin, 2500);
    } else {
      setTimeout(playLose, 2500);
    }
    return;
  }
  setTimeout(playCard, 3000);
};

const cardIncorrect = function () {
  gameState.wasWrong = true;
  scoreContainer.innerHTML = thumbsDown + scoreContainer.innerHTML;
  audioAlerts.src = './src/mp3/wrong.mp3';
  audioAlerts.play();
};

const drawCards = function (category) {
  // ? getting an array of cards of certain category and shuffle them
  cards = cardsArray.filter((card) => card.category === category).sort(() => Math.random() - 0.5);

  // ? if generated cards have categories category that means that we are generating main page
  // debugger
  if (cards[0].category === 'categories') {
    gameState.isStartPage = true;
  } else if (gameState.isGameMode === true) {
    playContainer.classList.remove('visually-hidden');
    gameState.isGame = false;
    gameState.isStartPage = false;
  } else if (gameState.isGameMode === false) {
    playContainer.classList.add('visually-hidden');
    gameState.isStartPage = false;
  } else {
    gameState.isStartPage = false;
  }

  repeatContainer.classList.add('visually-hidden');
  cardsContainer.innerHTML = '';
  scoreContainer.innerHTML = '';
  nav.classList.remove('nav-opened');
  toggleNav.checked = false;
  currentCardCounter = 0;
  guessedCards = [];
  gameState.wasWrong = false;
  nav.style.height = `${document.body.scrollHeight}px`;
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of cards) {
    const card = document.createElement('card');
    // debugger
    card.dataset.category = elem.category;
    if (elem.category === 'categories') {
      card.classList.add('categories_card');
    }
    card.classList.add('card', 'not-rotate-card');
    card.innerHTML = `<audio src="${elem.audio}" class='vusially-hidden' id ='audio'></audio>
    <img src="${elem.img}" alt="" class='card-image'>
  <div class="card-description">
  <p class="card-name__eng">${elem.nameEng}</p>
  <p class="card-name__rus visually-hidden ">${elem.nameRus}</p>
  <span class="material-icons icon-rotate">rotate_right</span>
  </div>
  </img>`;
    if (!gameState.isStartPage && gameState.isGameMode) {
      card.childNodes[4].classList.toggle('visually-hidden');
      card.classList.toggle('card-playable');
    }

    card.id = elem.name;
    cardsContainer.appendChild(card);
  }

  const navElements = document.querySelectorAll('.nav-element');
  navElements.forEach((navElem) => {
    navElem.classList.remove('nav-element-active');
    if (navElem.id === category) {
      navElem.classList.add('nav-element-active');
    }
  });

};

drawCards('categories');

const generateNav = function () {
  const categories = cardsArray.filter((card) => card.category === 'categories');
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of categories) {
    const category = document.createElement('li');
    category.classList.add('nav-element');
    category.id = elem.name;
    category.innerHTML = `<img src="${elem.img}" class='nav-element__img' alt="">${elem.name}`;
    navList.append(category);
  }
};

generateNav();

toggleStateLabel.addEventListener('click', () => {
  gameState.isGameMode = !gameState.isGameMode;
  repeatContainer.classList.add('visually-hidden');
  const currentCategory = document.querySelector('card').dataset.category;
  if (gameState.isStartPage === false) {
    drawCards(currentCategory);
  }
});
//  ? PLAYIN THE GAME
playButton.addEventListener('click', () => {
  playContainer.classList.add('visually-hidden');
  repeatContainer.classList.remove('visually-hidden');
  const currentCategory = document.querySelector('card').dataset.category;
  gameState.isGame = true;
  if (currentCardCounter === 0) {
    currentCardsArray = cardsArray.filter((card) => card.category === currentCategory)
      .sort(() => Math.random() - 0.5);
    currentCard = currentCardsArray[currentCardCounter];
    audio.src = currentCard.audio;
    audio.play();
  }
});

repeatContainer.addEventListener('click', () => {
  audio.play();
});

cardsContainer.addEventListener('click', (event) => {
  if (event.target.closest('card')) {
    const chosenCard = event.target.closest('card');
    // ? if it is start page
    if (guessedCards.includes(chosenCard)) {
      return;
    }
    if (gameState.isStartPage) {
      drawCards(chosenCard.id);
      return;
    }
    // ? flip card
    if (event.target.closest('span')) {
      chosenCard.classList.add('rotate-card');
      chosenCard.childNodes[4].childNodes[1].classList.add('visually-hidden');
      chosenCard.childNodes[4].childNodes[3].classList.remove('visually-hidden');
      chosenCard.addEventListener('mouseleave', () => {
        chosenCard.classList.remove('rotate-card');
        chosenCard.childNodes[4].childNodes[1].classList.remove('visually-hidden');
        chosenCard.childNodes[4].childNodes[3].classList.add('visually-hidden');
      });
      return;
    }
    // ? Playin audio already
    if (!gameState.isStartPage && !gameState.isGameMode) {
      // ? playing audio for train mode
      chosenCard.childNodes[0].play();
    }

    if (!gameState.isStartPage && gameState.isGameMode && gameState.isGame) {
      if (chosenCard.id === currentCard.name) {
        cardCorrect(chosenCard);
      } else {
        cardIncorrect();
      }
    }
  }
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('li')) {
    const chosenCard = event.target.closest('li');
    drawCards(chosenCard.id);
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.hamburger-toggle') && !event.target.closest('nav')) {
    console.log(event.target.closest('.nav'))
    nav.classList.remove('nav-opened');
    toggleNav.checked = false;
  }
});

toggleNavLabel.addEventListener('click', () => {
  nav.style.height = `${document.body.scrollHeight}px`;
  nav.classList.toggle('nav-opened');
});

buttonCloseWin.onclick = () => {
  winSection.classList.add('visually-hidden');
  drawCards('categories');
};
buttonCloseLose.onclick = () => {
  loseSection.classList.add('visually-hidden');
  drawCards('categories');
};
