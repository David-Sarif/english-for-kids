const cardsArray = [
  {
    name: 'cats',
    img: './src/cards/cats/lynx.jpg',
    nameRus: 'Большие Кошки',
    nameEng: 'Big Cats',
    audio: '',
    category: 'categories',
  },
  {
    name: 'animals',
    img: './src/cards/animals/bear.jpg',
    nameRus: 'Животные',
    nameEng: 'Animals',
    audio: '',
    category: 'categories',
  },
  {
    name: 'food',
    img: './src/cards/food/borscht.jpg',
    nameRus: 'Еда',
    nameEng: 'food',
    audio: '',
    category: 'categories',
  },
  {
    name: 'fruits',
    img: './src/cards/fruits/apple.jpg',
    nameRus: 'Фрукты',
    nameEng: 'Fruits',
    audio: '',
    category: 'categories',
  },
  {
    name: 'vegetables',
    img: './src/cards/vegetables/tomato.jpg',
    nameRus: 'Овощи',
    nameEng: 'vegetables',
    audio: '',
    category: 'categories',
  },
  {
    name: 'professions',
    img: './src/cards/professions/engineer.jpg',
    nameRus: 'Профессии',
    nameEng: 'professions',
    audio: '',
    category: 'categories',
  },
  {
    name: 'lynx',
    img: './src/cards/cats/lynx.jpg',
    nameRus: 'Рысь',
    nameEng: 'Lynx',
    audio: './src/cards/cats/mp3/lynx.mp3',
    category: 'cats',
  },
  {
    name: 'panther',
    img: './src/cards/cats/panther.jpg',
    nameRus: 'Пантера',
    nameEng: 'Panther',
    audio: './src/cards/cats/mp3/panther.mp3',
    category: 'cats',
  },
  {
    name: 'snow_leopard',
    img: './src/cards/cats/snow_leopard.jpg',
    nameRus: 'Снежный Барс',
    nameEng: 'Snow Leopard',
    audio: './src/cards/cats/mp3/snow_leopard.mp3',
    category: 'cats',
  },
  {
    name: 'leopard',
    img: './src/cards/cats/leopard.jpg',
    nameRus: 'Леопард',
    nameEng: 'Leopard',
    audio: './src/cards/cats/mp3/leopard.mp3',
    category: 'cats',
  },
  {
    name: 'lion',
    img: './src/cards/cats/lion.jpg',
    nameRus: 'Лев',
    nameEng: 'Lion',
    audio: './src/cards/cats/mp3/lion.mp3',
    category: 'cats',
  },
  {
    name: 'cheetah',
    img: './src/cards/cats/cheetah.jpg',
    nameRus: 'Гепард',
    nameEng: 'Cheetah',
    audio: './src/cards/cats/mp3/cheetah.mp3',
    category: 'cats',
  },
  {
    name: 'manul',
    img: './src/cards/cats/manul.jpg',
    nameRus: 'Манул',
    nameEng: 'Manul',
    audio: './src/cards/cats/mp3/manul.mp3',
    category: 'cats',
  },
  {
    name: 'tiger',
    img: './src/cards/cats/tiger.jpg',
    nameRus: 'Тигр',
    nameEng: 'Tiger',
    audio: './src/cards/cats/mp3/tiger.mp3',
    category: 'cats',
  },
  {
    name: 'bear',
    img: './src/cards/animals/bear.jpg',
    nameRus: 'Медведь',
    nameEng: 'Bear',
    audio: './src/cards/animals/mp3/bear.mp3',
    category: 'animals',
  },
  {
    name: 'beaver',
    img: './src/cards/animals/beaver.jpg',
    nameRus: 'Бобр',
    nameEng: 'Beaver',
    audio: './src/cards/animals/mp3/beaver.mp3',
    category: 'animals',
  },
  {
    name: 'crocodile',
    img: './src/cards/animals/crocodile.jpg',
    nameRus: 'Крокодил',
    nameEng: 'Crocodile',
    audio: './src/cards/animals/mp3/crocodile.mp3',
    category: 'animals',
  },
  {
    name: 'hedgehog',
    img: './src/cards/animals/hedgehog.jpg',
    nameRus: 'Ёж',
    nameEng: 'Hedgehog',
    audio: './src/cards/animals/mp3/hedgehog.mp3',
    category: 'animals',
  },
  {
    name: 'horse',
    img: './src/cards/animals/horse.jpg',
    nameRus: 'Лошадь',
    nameEng: 'Horse',
    audio: './src/cards/animals/mp3/horse.mp3',
    category: 'animals',
  },
  {
    name: 'moose',
    img: './src/cards/animals/moose.jpg',
    nameRus: 'Лось',
    nameEng: 'Moose',
    audio: './src/cards/animals/mp3/moose.mp3',
    category: 'animals',
  },
  {
    name: 'panda',
    img: './src/cards/animals/panda.jpg',
    nameRus: 'Панда',
    nameEng: 'Panda',
    audio: './src/cards/animals/mp3/panda.mp3',
    category: 'animals',
  },
  {
    name: 'zebra',
    img: './src/cards/animals/zebra.jpg',
    nameRus: 'Зебра',
    nameEng: 'Zebra',
    audio: './src/cards/animals/mp3/zebra.mp3',
    category: 'animals',
  },
  {
    name: 'borscht',
    img: './src/cards/food/borscht.jpg',
    nameRus: 'Борщ',
    nameEng: 'Borscht',
    audio: './src/cards/food/mp3/borscht.mp3',
    category: 'food',
  },
  {
    name: 'bread',
    img: './src/cards/food/bread.jpg',
    nameRus: 'Хлеб',
    nameEng: 'Bread',
    audio: './src/cards/food/mp3/bread.mp3',
    category: 'food',
  },
  {
    name: 'cake',
    img: './src/cards/food/cake.jpg',
    nameRus: 'Торт',
    nameEng: 'Cake',
    audio: './src/cards/food/mp3/cake.mp3',
    category: 'food',
  },
  {
    name: 'cheese',
    img: './src/cards/food/cheese.jpg',
    nameRus: 'Сыр',
    nameEng: 'Cheese',
    audio: './src/cards/food/mp3/cheese.mp3',
    category: 'food',
  },
  {
    name: 'dumplings',
    img: './src/cards/food/dumplings.jpg',
    nameRus: 'Пельмени',
    nameEng: 'Dumplings',
    audio: './src/cards/food/mp3/dumplings.mp3',
    category: 'food',
  },
  {
    name: 'ice_cream',
    img: './src/cards/food/ice_cream.jpg',
    nameRus: 'Мороженое',
    nameEng: 'Ice Cream',
    audio: './src/cards/food/mp3/ice_cream.mp3',
    category: 'food',
  },
  {
    name: 'pizza',
    img: './src/cards/food/pizza.jpg',
    nameRus: 'Пицца',
    nameEng: 'Pizza',
    audio: './src/cards/food/mp3/pizza.mp3',
    category: 'food',
  },
  {
    name: 'porridge',
    img: './src/cards/food/porridge.jpg',
    nameRus: 'Каша',
    nameEng: 'Porridge',
    audio: './src/cards/food/mp3/porridge.mp3',
    category: 'food',
  },
  {
    name: 'apple',
    img: './src/cards/fruits/apple.jpg',
    nameRus: 'Яблоко',
    nameEng: 'Apple',
    audio: './src/cards/fruits/mp3/apple.mp3',
    category: 'fruits',
  },
  {
    name: 'banana',
    img: './src/cards/fruits/banana.jpg',
    nameRus: 'Банан',
    nameEng: 'banana',
    audio: './src/cards/fruits/mp3/banana.mp3',
    category: 'fruits',
  },
  {
    name: 'kiwi',
    img: './src/cards/fruits/kiwi.jpg',
    nameRus: 'Киви',
    nameEng: 'kiwi',
    audio: './src/cards/fruits/mp3/kiwi.mp3',
    category: 'fruits',
  },
  {
    name: 'mango',
    img: './src/cards/fruits/mango.jpg',
    nameRus: 'Манго',
    nameEng: 'mango',
    audio: './src/cards/fruits/mp3/mango.mp3',
    category: 'fruits',
  },
  {
    name: 'orange',
    img: './src/cards/fruits/orange.jpg',
    nameRus: 'Апельсин',
    nameEng: 'orange',
    audio: './src/cards/fruits/mp3/orange.mp3',
    category: 'fruits',
  },
  {
    name: 'peach',
    img: './src/cards/fruits/peach.jpg',
    nameRus: 'Персик',
    nameEng: 'peach',
    audio: './src/cards/fruits/mp3/peach.mp3',
    category: 'fruits',
  },
  {
    name: 'pear',
    img: './src/cards/fruits/pear.jpg',
    nameRus: 'Груша',
    nameEng: 'pear',
    audio: './src/cards/fruits/mp3/pear.mp3',
    category: 'fruits',
  },
  {
    name: 'pineapple',
    img: './src/cards/fruits/pineapple.jpg',
    nameRus: 'Ананас',
    nameEng: 'pineapple',
    audio: './src/cards/fruits/mp3/pineapple.mp3',
    category: 'fruits',
  },
  {
    name: 'cabbage',
    img: './src/cards/vegetables/cabbage.jpg',
    nameRus: 'Капуста',
    nameEng: 'cabbage',
    audio: './src/cards/vegetables/mp3/cabbage.mp3',
    category: 'vegetables',
  },
  {
    name: 'carrot',
    img: './src/cards/vegetables/carrot.jpg',
    nameRus: 'Морковь',
    nameEng: 'carrot',
    audio: './src/cards/vegetables/mp3/carrot.mp3',
    category: 'vegetables',
  },
  {
    name: 'cucumber',
    img: './src/cards/vegetables/cucumber.jpg',
    nameRus: 'Огурец',
    nameEng: 'cucumber',
    audio: './src/cards/vegetables/mp3/cucumber.mp3',
    category: 'vegetables',
  },
  {
    name: 'eggplant',
    img: './src/cards/vegetables/eggplant.jpg',
    nameRus: 'Баклажан',
    nameEng: 'eggplant',
    audio: './src/cards/vegetables/mp3/eggplant.mp3',
    category: 'vegetables',
  },
  {
    name: 'peas',
    img: './src/cards/vegetables/peas.jpg',
    nameRus: 'Горох',
    nameEng: 'peas',
    audio: './src/cards/vegetables/mp3/peas.mp3',
    category: 'vegetables',
  },
  {
    name: 'pumpkin',
    img: './src/cards/vegetables/pumpkin.jpg',
    nameRus: 'Тыква',
    nameEng: 'pumpkin',
    audio: './src/cards/vegetables/mp3/pumpkin.mp3',
    category: 'vegetables',
  },
  {
    name: 'radish',
    img: './src/cards/vegetables/radish.jpg',
    nameRus: 'Редис',
    nameEng: 'radish',
    audio: './src/cards/vegetables/mp3/radish.mp3',
    category: 'vegetables',
  },
  {
    name: 'tomato',
    img: './src/cards/vegetables/tomato.jpg',
    nameRus: 'Помидор',
    nameEng: 'tomato',
    audio: './src/cards/vegetables/mp3/tomato.mp3',
    category: 'vegetables',
  },
  {
    name: 'builder',
    img: './src/cards/professions/builder.jpg',
    nameRus: 'строитель',
    nameEng: 'builder',
    audio: './src/cards/professions/mp3/builder.mp3',
    category: 'professions',
  },
  {
    name: 'cosmonaut',
    img: './src/cards/professions/cosmonaut.jpg',
    nameRus: 'космонавт',
    nameEng: 'cosmonaut',
    audio: './src/cards/professions/mp3/cosmonaut.mp3',
    category: 'professions',
  },
  {
    name: 'doctor',
    img: './src/cards/professions/doctor.jpg',
    nameRus: 'врач',
    nameEng: 'doctor',
    audio: './src/cards/professions/mp3/doctor.mp3',
    category: 'professions',
  },
  {
    name: 'driver',
    img: './src/cards/professions/driver.jpg',
    nameRus: 'водитель',
    nameEng: 'driver',
    audio: './src/cards/professions/mp3/driver.mp3',
    category: 'professions',
  },
  {
    name: 'engineer',
    img: './src/cards/professions/engineer.jpg',
    nameRus: 'инженер',
    nameEng: 'engineer',
    audio: './src/cards/professions/mp3/engineer.mp3',
    category: 'professions',
  },
  {
    name: 'fireman',
    img: './src/cards/professions/fireman.jpg',
    nameRus: 'пожарный',
    nameEng: 'fireman',
    audio: './src/cards/professions/mp3/fireman.mp3',
    category: 'professions',
  },
  {
    name: 'policeman',
    img: './src/cards/professions/policeman.jpg',
    nameRus: 'полицейский',
    nameEng: 'policeman',
    audio: './src/cards/professions/mp3/policeman.mp3',
    category: 'professions',
  },
  {
    name: 'programmer',
    img: './src/cards/professions/programmer.jpg',
    nameRus: 'программист',
    nameEng: 'programmer',
    audio: './src/cards/professions/mp3/programmer.mp3',
    category: 'professions',
  },

];

export default cardsArray;
