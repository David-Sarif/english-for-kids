import cardsArray from './cards.js';

const cardsContainer = document.getElementById('cards-container');
const nav = document.getElementById('nav');
const drawCards = function (cards) {
  cardsContainer.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of cards) {
    const card = document.createElement('card');
    if (elem.category === 'categories') {
      card.classList.add('categories_card');
    }
    card.classList.add('card');
    card.innerHTML = `<img src="${elem.img}" alt="" class='card-image'>
  <div class="card-description">
  <p class="card-name__eng">${elem.nameEng}</p>
  <p class="card-name__rus visually-hidden">${elem.nameRus}</p>
  <span class="material-icons icon-rotate">rotate_right</span>
  </div>
  </img>`;
    card.id = elem.name;
    cardsContainer.appendChild(card);
  }
};
drawCards(cardsArray.filter((card) => card.category === 'categories'));

cardsContainer.addEventListener('click', (event) => {
  if (event.target.closest('card')) {
    const chosenCard = event.target.closest('card').id;
    // Add checking if it is start page
    // лучше проверять через GameStatus.startPage
    drawCards(cardsArray.filter((card) => card.category === chosenCard));

  }
  
  
})
nav.addEventListener('click', (event) =>{
  if (event.target.closest('li')) {
    const chosenCard = event.target.closest('li').id;
    
    drawCards(cardsArray.filter((card) => card.category === chosenCard));
    nav.classList.add('visually-hidden')

  }
  
})

document.querySelector("body > header > div > div.hamburger-toggle > label").addEventListener('click', (event) =>{
  nav.classList.toggle('visually-hidden')
})
