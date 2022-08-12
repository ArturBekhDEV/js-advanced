/*

  Формат JSON.

   JSON (JavaScript Object Notation)
   JSON.parse();
     Розбирає рядок JSON, можливо з перетворенням отримуваного значення та його властивостей та повертає розібране значення.
     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   JSON.stringify()
     Повертає рядок JSON, що відповідає вказаному значенню.
     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify 

*/

let someUser = {
  name: "asd",
  age: 25,
  doSmsng: function () {
    console.log("hello");
  },
  b: undefined,
};

// console.log(someUser);
var y = JSON.stringify(someUser);
console.log("Strigified Obj", y);
// console.log(typeof y);

// correct
var myJSON = '{"name":"Adam"}';
// incorrect
//var myJSON = "{'name':'Adam'}";

var Adam = JSON.parse(myJSON);

console.log(Adam);
//     Adam.age = "23";
// let AJAX_DATA = JSON.stringify(Adam);
//     console.log(AJAX_DATA);

/*
  JSON є синтаксисом для серіалізації об'єктів, масивів, чисел, рядків логічних значень та значення null
   тобто JSON працює з наступними типами даних:
  - Object : {}
  - Array : []
  - Number : 12
  - String : ""
  - Boolen : true
  - null

  Особливості: 
    1) Передає лише дані 
    2) Імена властивостей мають бути рядками укладеними у подвійні лапки
    
*/

// JSON.parse(); // - from string -> obj
// JSON.stringify(); // from obj -> string
