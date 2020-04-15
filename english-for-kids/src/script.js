import cardsArray from './cards.js';

const cardsContainer = document.getElementById('cards-container');
const nav = document.getElementById('nav');
const toggleNavLabel = document.getElementById('toggle-nav-label');
const toggleNav = document.getElementById('toggle-nav');
const navList = document.getElementById('nav-list')

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
  nav.classList.remove('nav-opened');
  toggleNav.checked = false;
};
drawCards(cardsArray.filter((card) => card.category === 'categories'));

const generateNav = function (){
  const categories = cardsArray.filter((card) => card.category === 'categories');
  for (const elem of categories){
    const category = document.createElement('li');
    category.classList.add('nav-element');
    category.id = elem.name;
    category.innerHTML = `<img src="${elem.img}" class='nav-element__img' alt="">${elem.name}`;
    navList.append(category);
  }
  
}

generateNav()

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
    
    

  }
  
})

toggleNavLabel.addEventListener('click', (event) =>{
  nav.classList.toggle('nav-opened')
})
