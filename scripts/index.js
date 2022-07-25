const page = document.querySelector(".page");
/*const mainPopup = page.querySelector ('.popup');*/
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
const namePlaceInput = placePopup.querySelector('.popup__input_place_name');
const linkPlaceInput = placePopup.querySelector('.popup__input_place_link');


const imagePopup = page.querySelector ('.image-popup');
const closeImagePopup = imagePopup.querySelector('.popup__close');
const bigImageName = imagePopup.querySelector('.popup__place-name');
const bigImageLink = imagePopup.querySelector('.popup__image');

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

  return cardElement;
}

closeImagePopup.addEventListener('click', function(){
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
}

placePopup.addEventListener('submit', submitNewCardForm);



initialCards.forEach(function (element) {
  baseElements.prepend(createCard(element));
})






















