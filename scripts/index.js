let page = document.querySelector(".page");
let formElement = page.querySelector ('.popup');
let addName =page.querySelector('.profile__edit');
let remCross = page.querySelector('.popup__button');

addName.addEventListener('click', function popChange(){
  formElement.classList.add("popup_opened");
  });

remCross.addEventListener('click', function opChange(){
  formElement.classList.remove("popup_opened");
  })

let nameInput = page.querySelector('.popup__input_name');
let jobInputt = page.querySelector('.popup__input_job');


function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.
 nameInput.value;
 jobInputt.value;
                                   // Получите значение полей jobInput и nameInput из свойства value
 let textName = page.querySelector('.profile__title');
 let textJob = page.querySelector('.profile__subtitle');     // Выберите элементы, куда должны быть вставлены значения полей
 textName.textContent = nameInput.value;
 textJob.textContent = jobInputt.value;                       // Вставьте новые значения с помощью textContent
}


formElement.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);

let sub = page.querySelector('.popup__edit');

sub.addEventListener('click', function popChen(){
  formElement.classList.remove("popup_opened");
  })

  




// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»








/* Находим форму в DOM
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


 



 








