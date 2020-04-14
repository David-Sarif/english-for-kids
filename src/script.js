import cardsArray from './module.js';

const cardsContainer = document.getElementById('cards-container');

// eslint-disable-next-line no-restricted-syntax
for (const elem of cardsArray) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src="${elem.img}" alt="" class='card-image'>
  <div class="card-description">
  <p class="card-name__eng">${elem.nameEng}</p>
  <p class="card-name__rus visually-hidden">${elem.nameRus}</p>
  <span class="material-icons icon-rotate">rotate_right</span>
  </div>
  </img>`;
  cardsContainer.appendChild(card);
};
