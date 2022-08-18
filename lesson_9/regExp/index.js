/*

  Регулярні вирази - це шаблони, які використовуються для зіставлення послідовностей символів у рядках.
   https://regexr.com/
   https://regexper.com/
   https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp 

*/

/*
  Регулярний вираз створюється:
   - виділенням слішами /yourRegExp/gim
   - через конструктор: new RegExp(regExpString, regExpFlags)
*/

/*
  Прапори RegExp, які підтримує JS:

   -g = global (Глобальний пошук по рядку)
   -i = case insensitive (Пошук не залежить від реєстру літери: А\а)
   -m = multiline
*/

/*

Приклади регулярних виразів:

  [] – група символів
  [^] - Група символів крім
  [A-Z] - всі загальні літери
  [a-z] - всі малі літери
  [a-zA-Z] - всі малі та великі літери
  [0-9] - усі цифри від 0-9
  \d - усі цифри від 0-9
  \D - все крім цифр
  \w - все, що є буквою чи цифрою
  \W - все, що не є буквою чи цифрою
  \s - пробіл
  \S - все, що не є пробілом

  \b - межа слова | myWord |
      /\ban\b/g - знайти всі слова an
  \B - не межа слова
      /\Ban\B - знайти an яке не варто на початку та наприкінці.
      
  | - Умова "або" в regExp
      /\Bab|an\B - знайти an яке стоїть на початку чи кінці.

      gray|grey - знайти слова gray або grey
      gr(a|e)y - те саме, що й вище

  той же приклад зі словом center:
      центр | centre
      cent(er|re)

  . - будь-який символ
  \. - знайти точку, так само підходить для будь-яких зарезервованих символів у regExp
      - /\[\w+\]/g -> знайти слово у квадратних лапках
      - /\.gif/ -> знайти .gif

  {4} - кількість посторінь виразу
      .{4} - будь-яких 4 символи
      . {2,6} - від двох до шести будь-яких символів
      . {2,} - будь-які 2

  ? - виключає символ перед ним
  color / colour ->
      /colou?r/

  Жадібні і не жадібні повторення
  - за замовчуванням усі поторіння жадібні.
    /a.{2,10}e/ -> pl>[aceholde]r re]peat<
  - не жадібне повторення%
    /a.{2,10}?e/ -> pl>[aceholde]r repeat<

    /a.{1,}?e/ -> знайде всі повторення a-e в тексті з будь-якою кількістю символів між ними, де є хоч один символ між ними
    /a.+?e/ -> теж що приклад вище
  + - всі повторення, більше або одно 1
  * - всі повторення, більше або одно 0

  lockhead -> додатковий вираз після основного, яке не буде включено в результат
  (? = exp)
      /and(?=\she)/ -> знайде все and після яких йде "he";
  (?!exp)->
      /and(?! he)/ -> знайде все and після яких НЕ йде "he";
  Group:
    Групуємо результат на групи, кожен з яких можна знайти окремо.
    (\b\w*)@(\w+\.\w+\b) -> знайде вираз і розіб'є його на 2 групи пр символу ()
      кожну з яких можна отримати окремо
*/

  var string = "Hello my name is Jack and my email is JackSurname@gmail.com";
  /*
    string.match(regExp); -> поверне всі збіги за висловом
  */

  var pattern = /\w+/g; // усі слова
  var result = string.match(pattern);
  console.log( result );

  /*
    string.search("regExp"); -> поверне index першого збігу або -1 якщо нічого не знайдено
  */
  var result = string.search(/Jack/);
  console.log(result);

  /*
    string.split(regExp); ->
  */

  //var string = "Hello,                 my name is       Jack and my     email is JackSurname@gmail.com";
  //var result = string.split(" ");
  var result = string.split(/\s+/); // Розбити рядок по роздільнику пробіл, який повторюється 1 і більше разів
  console.log(result);

  /*
    string.replace(regExp, string);
  */
  console.log(string);
  console.log( string.replace(/(\w+)@(\w+.)(\w+)/, "Invalid link") );


  // для практики та закріплення регулярок
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions