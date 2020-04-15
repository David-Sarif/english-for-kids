import cardsArray from './cards.js';

const gameState = {
  isStartPage: true,
  isGame: false,
};

const cardsContainer = document.getElementById('cards-container');
const nav = document.getElementById('nav');
const toggleNavLabel = document.getElementById('toggle-nav-label');
const toggleNav = document.getElementById('toggle-nav');
const navList = document.getElementById('nav-list');
const audio = document.getElementById('audio');
// pause(1000);
// function pause(ms)
// {
// var date = new Date();
// var curDate = null;
// do { curDate = new Date(); }
// while(curDate-date &lt; ms);
// }
const drawCards = function (cards) {
  // debugger
    // ? if generated cards have categories category that means that we are generating main page 
  if (cards[0].category === 'categories'){
    gameState.isStartPage = true
  }
  else {
    gameState.isStartPage = false
  }
  cardsContainer.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of cards) {
    const card = document.createElement('card');
    if (elem.category === 'categories') {
      card.classList.add('categories_card');
    }
    // debugger
    card.classList.add('card', 'not-rotate-card');
    card.innerHTML = `<audio src="${elem.audio}" class='vusially-hidden' id ='audio'></audio>
    <img src="${elem.img}" alt="" class='card-image'>
  <div class="card-description">
  <p class="card-name__eng">${elem.nameEng}</p>
  <p class="card-name__rus visually-hidden ">${elem.nameRus}</p>

  
  <span class="material-icons icon-rotate">rotate_right</span>
  </div>
  </img>`;
    card.id = elem.name;
    cardsContainer.appendChild(card);
  }
  nav.classList.remove('nav-opened');
  toggleNav.checked = false;
  // debugger


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
    const chosenCard = event.target.closest('card');
    // Add checking if it is start page
    // лучше проверять через GameStatus.startPage
    if (gameState.isStartPage) {
    drawCards(cardsArray.filter((card) => card.category === chosenCard.id));

    return
  }
  // ? flip card
  if (event.target.closest('span')){
    
    // chosenCard.classList.remove('not-rotate-card');
    chosenCard.classList.add('rotate-card');
    chosenCard.childNodes[4].childNodes[1].classList.add('visually-hidden');
    chosenCard.childNodes[4].childNodes[3].classList.remove('visually-hidden')
    // chosenCard.childNodes[4].childNodes[3].classList.remove('visually-hidden');
    chosenCard.addEventListener('mouseleave', (event) => {
      // console.log(event)
      chosenCard.classList.remove('rotate-card');
      // chosenCard.classList.add('not-rotate-card');
      chosenCard.childNodes[4].childNodes[1].classList.remove('visually-hidden');
      chosenCard.childNodes[4].childNodes[3].classList.add('visually-hidden');
    })
    return
  }
  // ? Playin audio already
    if (!gameState.isStartPage){
      chosenCard.childNodes[0].play()
     
    }
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

