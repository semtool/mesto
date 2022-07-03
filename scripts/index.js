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


 



 








