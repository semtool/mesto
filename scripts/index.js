const page = document.querySelector(".page");
const mainPopup = page.querySelector ('.popup');
const profilePopup = page.querySelector ('.profile-popup');
const addName =page.querySelector('.profile__edit');
const closeProfilePopup = profilePopup.querySelector('.popup__close');

const nameInput = profilePopup.querySelector('.popup__input_person_name');
const jobInput = profilePopup.querySelector('.popup__input_person_job');
const textName = page.querySelector('.profile__title');
const textJob = page.querySelector('.profile__subtitle');

const placePopup = page.querySelector ('.place-popup');
const addPlace = page.querySelector('.profile__add');
const closePlacePopup = placePopup.querySelector('.popup__close');
const namePlaceInput = placePopup.querySelector('.placepopup__input_place_name');
const linkPlaceInput = placePopup.querySelector('.placepopup__input_place_link');


const imagePopup = page.querySelector ('.image-popup');
const closeImagePopup = imagePopup.querySelector('.popup__close');
const bigImageName = imagePopup.querySelector('.imagepopup__place-name');
const bigImageLink = imagePopup.querySelector('.imagepopup__image');

const baseElements = document.querySelector('.elements');
const elemTemplate = document.querySelector('.element-temlate').content;



function openPopup(mainPopup){
  mainPopup.classList.add("popup_opened");
}

function closePopup(mainPopup) {
  mainPopup.classList.remove('popup_opened');
}


function submitProfilePopup (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  textJob.textContent = jobInput.value;
  closePopup(profilePopup);
}


addName.addEventListener('click', function(){
  openPopup(profilePopup);
  nameInput.value = textName.textContent;
  jobInput.value = textJob.textContent;
});


closeProfilePopup.addEventListener('click', function(){
  closePopup(profilePopup);
});

profilePopup.addEventListener('submit', submitProfilePopup);





addPlace.addEventListener('click', function(){
  openPopup(placePopup);
});

closePlacePopup.addEventListener('click', function(){
  closePopup(placePopup);
});



/* модалка болльшой карточки*/


/* модалка болльшой карточки upper

/*
placePopup.addEventListener('submit', cardSubmitHandler);*/


/*
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



/* Place form выше */




/* Imagepopup form ниже*/




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




function createCard(element){
  
  const cardElement = elemTemplate.querySelector('.element').cloneNode(true);
  const showBigImage = cardElement.querySelector('.element__image-container');
  const likeHeartImage = cardElement.querySelector('.element__like');
  const deleteCard = cardElement.querySelector('.element__garb');

  cardElement.querySelector ('.element__place').textContent = element.name;
  cardElement.querySelector ('.element__image').src = element.link;
  cardElement.querySelector ('.element__image').alt = element.name;


  likeHeartImage.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  })

  
  deleteCard.addEventListener('click', function() {
    cardElement.remove();
  });


  showBigImage.addEventListener('click', function(){
    openPopup(imagePopup);
    bigImageName.textContent = element.name;
    bigImageLink.src = element.link;
    bigImageLink.alt = element.name;
  });

  closeImagePopup.addEventListener('click', function(){
    closePopup(imagePopup);
  });

  return cardElement;
}


function submitNewCardForm (evt) {
  evt.preventDefault();
  const newCard=[{
    name: namePlaceInput.value,
    link: linkPlaceInput.value,

  },]

  newCard.forEach(function (element) {
    baseElements.prepend(createCard(element));
  })
  evt.target.reset();
  closePopup(placePopup);

}

placePopup.addEventListener('submit', submitNewCardForm);



initialCards.forEach(function (element) {
  baseElements.prepend(createCard(element));
})



















/*

const elemTemplate = document.querySelector('.element-temlate').content;

initialCards.forEach(function (element) {
  
  const patternElemets = elemTemplate.querySelector('.element').cloneNode(true);

  patternElemets.querySelector ('.element__place').textContent = element.name ;
  patternElemets.querySelector ('.element__image').src = element.link;
  const butPlace = patternElemets.querySelector ('.element__garb');
  const likePlace = patternElemets.querySelector ('.element__like');
  const likeimage = patternElemets.querySelector ('.element__image-container');
  const imagePopup = document.querySelector('.image-popup');
  const imagePopupDel = document.querySelector('.popup__close');

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




const baseElements = document.querySelector('.elements');



function addTempCard (){
  const elemTemplate = document.querySelector('.element-temlate').content;
  const patternElemets = elemTemplate.querySelector('.element').cloneNode(true);
  patternElemets.querySelector ('.element__place').textContent = namePlaceInput.value;
  patternElemets.querySelector ('.element__image').src = linkPlaceInput.value;
  const butPlace = patternElemets.querySelector ('.element__garb');
  const likePlace = patternElemets.querySelector ('.element__like');
  const likeimage = patternElemets.querySelector ('.element__image-container');
  
  const imagePopup = document.querySelector('.image-popup');
  const imagePopupDel = imagePopup.querySelector('.popup__close');

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





addPlace.addEventListener('click', placeChange);
closePopup.addEventListener('click', closPopup);

/*closePlace.addEventListener('click', placeNotChange);
placePopup.addEventListener('submit', cardSubmitHandler);*/




















