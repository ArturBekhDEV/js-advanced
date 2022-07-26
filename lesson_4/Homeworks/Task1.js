/*

        Документація:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Перевірка всіх полів форми на валідність
        form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

        formElement.validity > Об'єкт із параметрами валідності поля
        formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
            повідомлення виведе message у браузерний потрапив

        Класи для стилізації стану елемента
        input:valid{} // hover
        input:invalid{} // firstchild

        
        Завдання:
        
        Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

        - Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
        - Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

        - згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

        Внизу дві кнопки:

        1) Звичайний submit який відправить форму, якщо вона валідна.
        2) Кнопка Validate(Перевірити) яка запускає методи:
            - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
            - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

    */

let form = document.getElementById("mainForm");
let submitButton = document.getElementById("submitBtn");
let validButton = document.getElementById("validateBtn");

let cleanValidationMessage = function () {
  let arrOfInputs = Array.from(form.elements);
  arrOfInputs.forEach((item) => {
    item.setCustomValidity("");
  });
};

submitButton.addEventListener("click", function (event) {
  cleanValidationMessage();

  if (form.userName.value === "") {
    form.userName.setCustomValidity("type something in username");
  }
  if (form.userEmail.value === "") {
    form.userEmail.setCustomValidity("pls type correct email");
  }

  if (!form.userPassword.validity.valid) {
    form.userPassword.setCustomValidity("correct password");
  }

  if (form.appleCount.value != 10) {
    form.appleCount.setCustomValidity("You told me 10");
  }

  if (form.blockThanks.value !== "thanks") {
    form.blockThanks.setCustomValidity("u should thank for me");
  }

  if (!form.agreeToStudy.validity.valid) {
    form.agreeToStudy.setCustomValidity(" = (");
  }
});

form.validateBtn.addEventListener("click", function () {
  if (form.checkValidity() === false) {
    alert("bad work");
  } else {
    alert("good work try one more");
  }

  form.reportValidity();
});
