// eslint-disable-next-line import/extensions
import cardsArray from './cards.js';

const gameState = {
  isStartPage: true,
  isGameMode: false,
  isGame: false,

};

const cardsContainer = document.getElementById('cards-container');
const nav = document.getElementById('nav');
const toggleNavLabel = document.getElementById('toggle-nav-label');
const toggleNav = document.getElementById('toggle-nav');
const navList = document.getElementById('nav-list');
const audio = document.getElementById('audio');
const audioAlerts = document.getElementById('audio-alerts');

const stateChanger = document.getElementById('toggleButton');
const toggleStateLabel = document.getElementById('toggle-state');

const playContainer = document.getElementById('play-container');
const playButton = document.getElementById('play-button');
const repeatContainer = document.getElementById('repeat-container');
const repeatButton = document.getElementById('repeat-button');

let currentCardCounter = 0;
// const iconPlay = document.getElementById('icon-play');
// const textPlay = document.getElementById('text-play');

const thumbsUp = '<img src="./src/img/thumbs_up.png" class="thumbs-img" alt="">';

const thumbsDown = '<img src="./src/img/thumbs_down.png" class="thumbs-img" alt="">';

const scoreContainer = document.getElementById('score-container');
// thumbsUp.classList.add('thumbs-img');

let currentCardsArray = [];
let currentCard = {};

const playCard = function() {
  if (currentCardCounter >= currentCardsArray.length) {
    return;
  }
  currentCard = currentCardsArray[currentCardCounter];
  audio.src = currentCard.audio;
  audio.play();
};


const cardCorrect = function() {
  scoreContainer.innerHTML = thumbsUp + scoreContainer.innerHTML;
  audioAlerts.src = './src/mp3/correct.mp3';
  audioAlerts.play();
  currentCardCounter += 1;
  setTimeout(playCard, 3000);
  // alert('верно')
}


const cardIncorrect = function() {
  scoreContainer.innerHTML = thumbsDown + scoreContainer.innerHTML;
  audioAlerts.src = './src/mp3/wrong.mp3';
  audioAlerts.play();
}



const drawCards = function (category) {
  // ? getting an array of cards of certain category and shuffle them
  const cards = cardsArray.filter((card) => card.category === category).sort(() => Math.random() - 0.5);

  // ? if generated cards have categories category that means that we are generating main page
  // debugger
  if (cards[0].category === 'categories') {
    gameState.isStartPage = true;
    
    // repeatContainer.classList.add('visually-hidden');
    
    // textPlay.classList.remove('visually-hidden');
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
  // playContainer.classList.add('visually-hidden');

  repeatContainer.classList.add('visually-hidden');
  cardsContainer.innerHTML = '';
  scoreContainer.innerHTML = '';
  nav.classList.remove('nav-opened');
  toggleNav.checked = false;
  currentCardCounter = 0;
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


toggleStateLabel.addEventListener('click', (event) => {
  gameState.isGameMode = !gameState.isGameMode;
  repeatContainer.classList.add('visually-hidden');
  // textPlay.classList.remove('visually-hidden');
  // scoreContainer.innerHTML = '';
  const currentCategory = document.querySelector('card').dataset.category;
  // currentCardsArray = cardsArray.filter((card) => card.category === currentCategory).sort(() => Math.random() - 0.5);
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
    currentCardsArray = cardsArray.filter((card) => card.category === currentCategory).sort(() => Math.random() - 0.5);
    // получаем категорию
    // const currentCategory = document.querySelector('card').dataset.category;
    // собираем массив этой категории
    // currentCardsArray = cardsArray.filter((card) => card.category === currentCategory).sort(() => Math.random() - 0.5);
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

    if (gameState.isStartPage) {
      drawCards(chosenCard.id);

      return;
    }
    // ? flip card
    if (event.target.closest('span')) {
      chosenCard.classList.add('rotate-card');
      chosenCard.childNodes[4].childNodes[1].classList.add('visually-hidden');
      chosenCard.childNodes[4].childNodes[3].classList.remove('visually-hidden');
      chosenCard.addEventListener('mouseleave', (event) => {
        chosenCard.classList.remove('rotate-card');
        chosenCard.childNodes[4].childNodes[1].classList.remove('visually-hidden');
        chosenCard.childNodes[4].childNodes[3].classList.add('visually-hidden');
      });
      return;
    }
    // ? Playin audio already
    if (!gameState.isStartPage && !gameState.isGameMode) {
      chosenCard.childNodes[0].play();
    }

    if (!gameState.isStartPage && gameState.isGameMode && gameState.isGame) {
      if (chosenCard.id === currentCard.name)
      {
        cardCorrect();
      }
      else {
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

toggleNavLabel.addEventListener('click', (event) => {
  nav.classList.toggle('nav-opened');
});
