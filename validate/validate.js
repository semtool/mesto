
/*----- рабочий без объекта настроек

const showInputError = (formElement,inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
    // Если поле не проходит валидацию, покажем ошибку
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement,inputElement);
 
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
   
    buttonElement.classList.add('popup__submit_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__submit_disabled');
    buttonElement.removeAttribute('disabled');
  }

}

const setEventListeners = (formElement) => {
 const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
 const buttonElement = formElement.querySelector('.popup__submit');
 toggleButtonState(inputList, buttonElement);
 

   inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    });
  }); 
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    });
    setEventListeners(formElement);
 
  });
  
};

enableValidation();---*/




/*--------test-------------*/

const settinsList={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};



const showInputError = (formElement,inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settinsList.inputErrorClass);
    // Если поле не проходит валидацию, покажем ошибку
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settinsList.errorClass);
};

const hideInputError = (formElement,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settinsList.inputErrorClass);
  errorElement.classList.remove(settinsList.errorClass);
  errorElement.textContent = '';

};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement,inputElement);
 
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
   
    buttonElement.classList.add(settinsList.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    
    // иначе сделай кнопку активной
    buttonElement.classList.remove(settinsList.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
 const inputList = Array.from(formElement.querySelectorAll(settinsList.inputSelector));
 const buttonElement = formElement.querySelector(settinsList.submitButtonSelector);
 toggleButtonState(inputList, buttonElement);
 

   inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    });
  }); 
};

const enableValidation = (settinsList) => {
  const formList = Array.from(document.querySelectorAll(settinsList.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    });
    setEventListeners(formElement);
  });
  
};

enableValidation(settinsList);