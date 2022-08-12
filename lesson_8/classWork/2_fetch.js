/*
Завдання:

  1. За допомогою fetch отримати дані:
     https://jsonplaceholder.typicode.com/users

  2. Отриману відповідь перетворити на json викликавши метод .json з об'єкта відповіді
  3. Вибрати випадкову людину і передати до наступного чейну промісу
  4. Зробити додатковий запит на отримання списку постів людини
     https://jsonplaceholder.typicode.com/posts
     І далі передати об'єкт:
      {
        name: userName,
        ...
        posts: postsData
      }

     Підказка потрібно викликати додатковий fecth з поточного чейну.
     Для того щоб передати результат виконання дод. запиту
     у наш перший проміс використовуйте констуркцію:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формуєте об'єкт у якому будуть дані людини з
                 першого запиту, наприклад, його name response1.name
                 та пости які прийшли з дод. запиту
              }
            )
        }
      )

    5. Вивести результат на сторінку

   + Бонус. Для конвертації об'єкта response в json використовувати одну
     функцію.

*/

// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = getRandomIntInclusive(1, 10);

let obj = {};

async function data() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  let postsData = await fetch("https://jsonplaceholder.typicode.com/posts");

  await fetchData.json().then((res) => {
    let randomPeople = res[randomNum];
    return (obj.name = randomPeople.name);
  });

  await postsData.json().then((res) => {
    let randomPost = res[randomNum];
    obj.posts = randomPost.body;
    console.log(obj);
    return obj;
  });
}

data();
