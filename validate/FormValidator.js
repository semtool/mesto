

// const settinsList={
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// }

export class FormValidator {
  constructor(settinsList,formElement ) {
    this._formElement = formElement
    this._inputSelector = settinsList.inputSelector
    this._submitButtonSelector = settinsList.submitButtonSelector
    this._inactiveButtonClass = settinsList.inactiveButtonClass
    this._inputErrorClass = settinsList.inputErrorClass
    this._errorClass = settinsList.errorClass
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
  }

  _showInputError (inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
      // Если поле не проходит валидацию, покажем ошибку
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity (inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput () {
  // проходим по этому массиву методом some
    return this._inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
    })
  }

  _switchOnSubmitButton() { 
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled'); 

  }
    switchOffSubmitButton(buttonElement) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);  
  }


  _toggleButtonState () {
    if (this._hasInvalidInput ()) {
    // сделай кнопку неактивной
      this.switchOffSubmitButton(); 
    } else {
    // иначе сделай кнопку активной
      this._switchOnSubmitButton(); 
    }
  }


  _setEventListeners () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
      });
    });
  }

  enableValidation () {
    this._setEventListeners(this._formElement)
  }
}

// const formValidatorAdd = new FormValidator(settinsList, Form );
// const formValidatorAddd = new FormValidator(settinsList, Forms );
//  formValidatorAdd.enableValidation();
//  formValidatorAddd.enableValidation();
