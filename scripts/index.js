let page = document.querySelector(".page");
let formElement = page.querySelector ('.popup');
let addName =page.querySelector('.profile__edit');
let remCross = page.querySelector('.popup__button');
let nameInput = page.querySelector('.popup__input_person_name');
let jobInput = page.querySelector('.popup__input_person_job');
let textName = page.querySelector('.profile__title');
let textJob = page.querySelector('.profile__subtitle');




function popChange(){
  formElement.classList.add("popup_opened");
  nameInput.value = textName.textContent;
  jobInput.value = textJob.textContent;
}


function notChange(){
  formElement.classList.remove("popup_opened"); 
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  textJob.textContent = jobInput.value; 
  notChange();
}


addName.addEventListener('click', popChange);
remCross.addEventListener('click', notChange);
formElement.addEventListener('submit', formSubmitHandler);




/*
textName.textContent = nameInput.value;
textJob.textContent = jobInput.value;


 let sub = page.querySelector('.popup__edit');

sub.addEventListener('click', function popChen(){
  formElement.classList.remove("popup_opened");
  })




// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»








Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);*/


 
/* Place form ниже */
let placeElement = page.querySelector ('.placepopup');
let addPlace = page.querySelector('.profile__add');
let closePlace = page.querySelector ('.placepopup__button');

let baseElements = document.querySelector('.elements');


let addCard = page.querySelector ('.placepopup__edit');

let namePlaceInput = page.querySelector('.placepopup__input_place_name');
let linkPlaceInput = page.querySelector('.placepopup__input_place_link');



function placeChange(){
  placeElement.classList.add("placepopup_opened");
}

function placeNotChange(){
  placeElement.classList.remove("placepopup_opened");
}

/* Place form выше */




/* Imagepopup form ниже--*/


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  
];




const elemTemplate = document.querySelector('.element-temlate').content;

initialCards.forEach(function (element) {
  
  const patternElemets = elemTemplate.querySelector('.element').cloneNode(true);

  patternElemets.querySelector ('.element__place').textContent = element.name ;
  patternElemets.querySelector ('.element__image').src = element.link;
  const butPlace = patternElemets.querySelector ('.element__garb');
  const likePlace = patternElemets.querySelector ('.element__like');
  const likeimage = patternElemets.querySelector ('.element__image-container');
  const imagePopup = document.querySelector('.imagepopup');
  const imagePopupDel = document.querySelector('.imagepopup__button');

  const imageName = document.querySelector('.imagepopup__place-name');
  const imageLink = document.querySelector('.imagepopup__image');

  function addBigPlace(){
    imagePopup.classList.add("imagepopup_opened");
    imageName.textContent= element.name;
    imageLink.src = element.link;
  }
  
  function delBigPlace(){
    imagePopup.classList.remove("imagepopup_opened");
  }

  function delCard() {
    let mesto = document.querySelector('.element');
    mesto.remove();
  }


  likePlace.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  })
 
  imagePopupDel.addEventListener('click', delBigPlace);
  likeimage.addEventListener('click', addBigPlace);
  butPlace.addEventListener('click', delCard);
  baseElements.prepend(patternElemets);
})






function addTempCard (){
  const elemTemplate = document.querySelector('.element-temlate').content;
  const patternElemets = elemTemplate.querySelector('.element').cloneNode(true);
  patternElemets.querySelector ('.element__place').textContent = namePlaceInput.value;
  patternElemets.querySelector ('.element__image').src = linkPlaceInput.value;
  const butPlace = patternElemets.querySelector ('.element__garb');
  const likePlace = patternElemets.querySelector ('.element__like');
  const likeimage = patternElemets.querySelector ('.element__image-container');
  
  const imagePopup = document.querySelector('.imagepopup');
  const imagePopupDel = document.querySelector('.imagepopup__button');

  const imageName = document.querySelector('.imagepopup__place-name');
  const imageLink = document.querySelector('.imagepopup__image');


function addBigPlace(){
  imagePopup.classList.add("imagepopup_opened");
  imageName.textContent= namePlaceInput.value;
  imageLink.src = linkPlaceInput.value;
}

function delBigPlace(){
  imagePopup.classList.remove("imagepopup_opened");
}


function delCard() {
  let mesto = document.querySelector('.element');
  mesto.remove();
}

  likePlace.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  })

  

  likeimage.addEventListener('click', addBigPlace);
  imagePopupDel.addEventListener('click', delBigPlace);
  butPlace.addEventListener('click', delCard);
  baseElements.prepend(patternElemets);
}


function cardSubmitHandler (evt) {
  evt.preventDefault();
  placeNotChange();

}



addCard.addEventListener('click', addTempCard);
addPlace.addEventListener('click', placeChange);
closePlace.addEventListener('click', placeNotChange);
placeElement.addEventListener('submit', cardSubmitHandler);




















