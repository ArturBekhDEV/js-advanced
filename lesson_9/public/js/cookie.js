// console.log('cookies works', document.cookie);
/*

  Cookies - спеціальний формат для збереження даних, який зберігається в браузері.
   Зберігає пари значень name-value:
   username = Vasya Pupkin
   document.cookie

*/

// Значення Cookie не можуть містити крапку з комою, коми або роздільні символи.
// записані cookie зберігаються у поточному сеансі браузера

//// наступний cookie буде зберігатися браузером протягом 1 тижня (60*60*24*7).
// document.cookie = "info=123;max-age=604800;";

//// наступний cookie буде зберігатися браузером протягом 10 м з
// document.cookie = "info=helloJavaScript;max-age=10;";

// console.log( document.cookie );
// // Встановити кастомну дату
var date = new Date();
    date = date.setDate( date.getDate() + 1 );
    console.log('date', date );
// // //actors
document.cookie = `Hello=JavaScript;max-age=${date};`;


// Видалення куки:
// var date = new Date(0);
// console.log( date );
// document.cookie = "Hello=; path=/; expires=" + date;


// Отримання куки
var cookies = document.cookie.split(';');
console.log( cookies );

// функції для роботи з куками
// source: https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) { 
  setCookie(name, '', -1); 
}
// examples

// //setCookie
// setCookie('userName', 'Bill', 12);

// // get cookie
// var infoFromCookies = getCookie('userName');
// console.log(infoFromCookies);

// // delete cookie
// deleteCookie('userName');


/* 
Cookies та localStorage використовуються для різних цілей.
Файли cookie в основному призначені для читання на стороні сервера, localStorage може бути прочитане лише на стороні клієнта.

Крім того, що файли cookie є старим способом збереження даних, вони дають вам обмеження 4096 байт (насправді 4095) - на файл cookie.
Розмір localStorage складає 5 МБ на домен. localStorage – це реалізація інтерфейсу сховища.
Він зберігає дані без дати закінчення терміну дії та очищається лише за допомогою JavaScript або очищення кеша браузера / локально збережених даних – на відміну від закінчення терміну дії cookie.

Cookies:
  Подано до HTML5.
  Має термін дії.
  Очистити за допомогою JS або кеш браузера або після закінчення терміну дії.
  Буде відправлено на сервер за кожним запитом.
  Місткість 4 КБ.
  Файли cookie можуть зберігати лише рядки.
  Є два типи файлів cookie: постійні та сеансові.
localStorage:
  Подано в HTML5.
  Немає терміну дії.
  Очистити за допомогою JS або Очистити кеш браузера.
  Ви можете вибрати, коли дані мають бути надіслані на сервер.
  Місткість складає 5 МБ.
  Дані зберігаються необмежений час і мають бути рядком.
  Є лише один тип.

*/
