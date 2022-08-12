/*
  Завдання:
   Написати скрипт який:
     1. Збирає дані з форми (3 різних полів), конвертує їх у json та виводить у консоль.
   -> 2. Зробити окремий інпут, який виконує JSON.parse(); на той рядок, що ви туди ввели і виводить результат у консоль.


  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

let inputName = document.querySelector("input[name=name]");
let inputAge = document.querySelector("input[name=age]");
let inputPassword = document.querySelector("input[name=password]");

let btn = document.getElementById("button");
let btnParse = document.getElementById("buttonParse");

let dataObj = {};
let dataJson = null;

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let nameValue = inputName.value;
  let ageValue = inputAge.value;
  let passwordValue = inputPassword.value;

  dataObj.name = nameValue;
  dataObj.age = ageValue;
  dataObj.password = passwordValue;

  dataJson = JSON.stringify(dataObj);
  console.log(dataJson);
});

btnParse.addEventListener("click", function (e) {
  e.preventDefault();

  let dataParse = JSON.parse(dataJson);
  console.log(dataParse);
});
