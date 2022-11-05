
import { Card } from "./Card.js";

import { FormValidator } from "../validate/FormValidator.js";


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


const settinsList={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}



const page = document.querySelector(".page");

const profilePopup = page.querySelector ('.profile-popup');
const profilePopupOpenButton =page.querySelector('.profile__edit');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close');

const nameInput = profilePopup.querySelector('.popup__input_person_name');
const jobInput = profilePopup.querySelector('.popup__input_person_job');
const textName = page.querySelector('.profile__title');
const textJob = page.querySelector('.profile__subtitle');

const placePopup = page.querySelector ('.place-popup');
const placePopupOpenButton = page.querySelector('.profile__add');
const placePopupClosePopup = placePopup.querySelector('.popup__close');
const namePlaceInput = placePopup.querySelector('.popup__input_place_name');
const linkPlaceInput = placePopup.querySelector('.popup__input_place_link');

const placePopupSubmitButton = placePopup.querySelector('.popup__submit');



export const imagePopup = page.querySelector ('.image-popup');
const imagePopupClosePopup = imagePopup.querySelector('.popup__close');
export const bigImageName = imagePopup.querySelector('.popup__place-name');
export const bigImageLink = imagePopup.querySelector('.popup__image');



const baseElements = document.querySelector('.elements');
// const elemTemplate = document.querySelector('.element-temlate').content;




function hidePopupSubmitButton(buttonElement){
    buttonElement.classList.add('popup__submit_disabled');
    buttonElement.setAttribute('disabled', true);
}


export function openPopup(mainPopup){
  mainPopup.classList.add("popup_opened");
  document.addEventListener('keydown',escapePopup);
  document.addEventListener('mousedown', escapeOverlayPopup);
}

function closePopup(mainPopup) {
  mainPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown',escapePopup);
  document.removeEventListener('mousedown', escapeOverlayPopup);
}

/*---esc---*/


function escapePopup(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function escapeOverlayPopup(evt) {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.target === openPopup ) {
    closePopup(openPopup);
  }
}



/*
function escapePopup (mainPopup){
document.addEventListener('keydown',function (evt){
  if (evt.key === 'Escape') {
    closePopup(mainPopup);
  }
});
}
/*---esc---*/


function submitProfilePopup (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  textJob.textContent = jobInput.value;
  closePopup(profilePopup);
}


profilePopupOpenButton.addEventListener('click', function(){
  openPopup(profilePopup);
  nameInput.value = textName.textContent;
  jobInput.value = textJob.textContent;
});


profilePopupCloseButton.addEventListener('click', function(){
  closePopup(profilePopup);
});



profilePopup.addEventListener('submit', submitProfilePopup);





placePopupOpenButton.addEventListener('click', function(){
  openPopup(placePopup);

});

placePopupClosePopup.addEventListener('click', function(){
  closePopup(placePopup);

});



//  function createCard(element){
  
//   const cardElement = elemTemplate.querySelector('.element').cloneNode(true);
//   const imageBigShow = cardElement.querySelector('.element__image-container');
//   const imageLike = cardElement.querySelector('.element__like');
//   const cardDelete = cardElement.querySelector('.element__garb');
//   const cardImage = cardElement.querySelector ('.element__image');


//    cardElement.querySelector ('.element__place').textContent = element.name;
//    cardImage.src = element.link;
//    cardImage.alt = element.name;


//   imageLike.addEventListener('click', function (evt) {
//     evt.target.classList.toggle('element__like_active');
//   })

  
  
//   cardDelete.addEventListener('click', function() {
//     cardElement.remove();
//   });


//   imageBigShow.addEventListener('click', function(){
//     openPopup(imagePopup);
    
//     bigImageName.textContent = element.name;
//     bigImageLink.src = element.link;
//     bigImageLink.alt = element.name;
//   });

//   return cardElement;
// }

function createCard (item) {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element-temlate');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  return cardElement;
};


imagePopupClosePopup.addEventListener('click', function(){
  closePopup(imagePopup);
});



function submitNewCardForm (evt) {
  evt.preventDefault();
  const newCard={
    name: namePlaceInput.value,
    link: linkPlaceInput.value,
  };
  
  baseElements.prepend(createCard(newCard));
  evt.target.reset();
  closePopup(placePopup);
  hidePopupSubmitButton(placePopupSubmitButton);
}


placePopup.addEventListener('submit', submitNewCardForm);


// initialCards.forEach(function (item) {
//   baseElements.prepend(createCard(item));
// })


initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element-temlate');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  baseElements.prepend(cardElement);
});


const ValidatorProfilePopup = new FormValidator(settinsList, profilePopup);
const ValidatorPlacePopup = new FormValidator(settinsList, placePopup );
ValidatorProfilePopup.enableValidation();
ValidatorPlacePopup.enableValidation();