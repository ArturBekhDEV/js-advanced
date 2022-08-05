/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
let colors = {
  background: "purple",
  color: "blue",
};

function myCall(color) {
  console.log(this);
  document.body.style.background = this.background;
  document.body.style.color = color;

  let newEl = document.createElement("h1");
  newEl.innerText = "I know how binding works in JS";
  document.body.appendChild(newEl);
}
// myCall.call(colors, "blue");

function myBind() {
  document.body.style.background = this.background;
  document.body.style.color = this.color;

  let newEl = document.createElement("h1");
  newEl.innerText = "I know how binding works in JS";
  document.body.appendChild(newEl);
}

function myApply(newh1) {
  document.body.appendChild(newh1);
  document.body.style.background = this.background;
  document.body.style.color = this.color;
}
let newh1 = document.createElement("h1");
newh1.innerText = "Hello from another h1!";

myApply.apply(colors, [newh1]);
