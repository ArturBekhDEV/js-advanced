/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

let arrAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let newFuncToward = function (word, num) {
  let wordSmall = word.toLowerCase();
  let split = wordSmall.split("");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    let splitI = split[i];
    for (let i = 0; i < arrAlpha.length; i++) {
      if (splitI === arrAlpha[i]) {
        arr.push(arrAlpha[i + num]);
        var newArr = arr.join("");
      }
    }
  }
  let capitalArr = newArr.charAt(0).toUpperCase() + newArr.slice(1);
  console.log(capitalArr);
};

let newFuncBack = function (word, num) {
  let wordSmall = word.toLowerCase();
  let split = wordSmall.split("");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    let splitI = split[i];
    for (let i = 0; i < arrAlpha.length; i++) {
      if (splitI === arrAlpha[i]) {
        arr.push(arrAlpha[i - num]);
        var newArr = arr.join("");
      }
    }
  }
  let capitalArr = newArr.charAt(0).toUpperCase() + newArr.slice(1);
  console.log(capitalArr);
};

// newFuncBack("Fwyzw", 5);
// newFuncToward("Artur", 5);

let bindFunc = newFuncToward.bind(undefined);
let bindFuncTest = bindFunc("Artur", 4);

let bindFunc2 = newFuncBack.bind(undefined);
let bindFuncTest2 = bindFunc2("Evxyv", 4);
