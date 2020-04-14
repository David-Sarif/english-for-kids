import hi from './module.js';

const cardsArray = [
  {
    name: 'lynx',
    img: './src/cards/cats/lynx.jpg',
    nameRus: 'Рысь',
    nameEng: 'Lynx',
    audio: '',
    category: 'cats',
  },
  {
    name: 'panther',
    img: './src/cards/cats/panther.jpg',
    nameRus: 'Пантера',
    nameEng: 'Panther',
    audio: '',
    category: 'cats',
  },
  {
    name: 'snow_leopard',
    img: './src/cards/cats/snow_leopard.jpg',
    nameRus: 'Снежный Барс',
    nameEng: 'Snow Leopard',
    audio: '',
    category: 'cats',
  },
  {
    name: 'leopard',
    img: './src/cards/cats/leopard.jpg',
    nameRus: 'Леопард',
    nameEng: 'Leopard',
    audio: '',
    category: 'cats',
  },
  {
    name: 'lion',
    img: './src/cards/cats/lion.jpg',
    nameRus: 'Лев',
    nameEng: 'Lion',
    audio: '',
    category: 'cats',
  },
  {
    name: 'cheetah',
    img: './src/cards/cats/cheetah.jpg',
    nameRus: 'Гепард',
    nameEng: 'Cheetah',
    audio: '',
    category: 'cats',
  },
  {
    name: 'manul',
    img: './src/cards/cats/manul.jpg',
    nameRus: 'Манул',
    nameEng: 'Manul',
    audio: '',
    category: 'cats',
  },
  {
    name: 'tiger',
    img: './src/cards/cats/tiger.jpg',
    nameRus: 'Тигр',
    nameEng: 'Tiger',
    audio: '',
    category: 'cats',
  },

];
const cardsContainer = document.getElementById('cards-container');

// eslint-disable-next-line no-restricted-syntax
for (let elem of cardsArray) {
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

}


