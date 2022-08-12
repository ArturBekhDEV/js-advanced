/*
  Asynchronous Javascript And Xml
*/

//let getUsersUrl = "https://jsonplaceholder.typicode.com/users";
// 1. Створюємо новий об'єкт XMLHttpRequest
let xhr = new XMLHttpRequest();
// 2. Налаштовуємо метод open
// xhr.open(method, URL, async, user, password)
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", false);
// 3. Надсилаємо запит
xhr.send();

// Нас цікавить 3 параметри: xhr.status, xhr.statusText, xhr.responseText
// 4. Якщо код відповіді сервера не 200, це швидше за все помилка
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
console.log(xhr);

if (xhr.status !== 200) {
  // Обробимо помилку
  console.log(xhr.status, xhr.statusText); // Приклад висновку: 404: Not Found
} else {
  console.log(xhr.responseText);
  // вивести результат
  var myResponse = JSON.parse(xhr.responseText);
  console.log(myResponse); // responseText - текст відповіді.
  myResponse.map((item) => console.log(item.name));
}
