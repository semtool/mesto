
  import {openPopup, imagePopup, bigImageName,bigImageLink} from "./index.js";
 

export class Card {
  constructor(item, templateSelector) {              //онструктор получает объект
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
}

// создадим экземпляр карточки 
  _getTemplate() {
  // забираем разметку из HTML и клонируем элемент
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  // вернём DOM-элемент карточки
    return cardElement;
  } 

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._markHeartLike();
    });
    this._element.querySelector('.element__garb').addEventListener('click', () => {
      this._deleteCardGarbage();
    });

    this._element.querySelector('.element__image-container').addEventListener('click', () => {
      bigImageName.textContent = this._name;
      bigImageLink.src = this._link;
      bigImageLink.alt = this._name;
      openPopup(imagePopup);
    });

  }


  _markHeartLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCardGarbage() {
    this._element.querySelector('.element__garb');
    this._element.remove();
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__place').textContent = this._name;
    
    // Вернём элемент наружу
    return this._element;
  }
}


