/*
  localStorage
  window.localStorage
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  На відміну від cookie, об'єкти веб-сховища не надсилаються на сервер при кожному запиті. Тому ми можемо зберігати набагато більше даних.
*/
//   console.log( window.localStorage );
// // // Запис в ЛС
// localStorage.setItem('myCat', 'Tom');
// localStorage.setItem('back', 'green');
// // // // Читання з ЛС
// var cat = localStorage.getItem("myCat");
// // // // Видалення з ЛС
// localStorage.removeItem("myCat");
// console.log( cat );
// // // Якщо не знайдено, поверне Null
// var background = localStorage.getItem('backasd');
// console.log(background);
// if( background !== null){
//   document.body.style.backgroundColor = background;
// }

// console.log( window.localStorage );

// let obj = {
//   name: 'Vasya',
//   learning: true
// }
// localStorage.setItem('user', JSON.stringify(obj) );
// console.log( JSON.parse( localStorage.getItem("user") ) );
// console.log( JSON.parse( localStorage.getItem("JSON") ) );

//// incognito window немає доступу
// Session storage – існує лише в рамках поточної вкладки браузера.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

// sessionStorage.setItem('test', 1); // - виконати в консолі
// alert( sessionStorage.getItem('test') ); - перевірити оновивши сторінку та відкривши в новій вкладці

// second example

// let myObj = [];

// class User {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;

//     myObj.push(this);
//   }
//   render(){
//     let node = document.createElement('div');
//         node.innerHTML = `
//           <h1>${this.name}</h1>
//           <h2>${this.age}</h2>
//         `;

//     document.body.appendChild(node);
//   }
// }

// let localUsers = localStorage.getItem('users');
// myObj = localUsers !== null 
//   ?
//     JSON.parse(localUsers).map( item => new User(item.name, item.age) ) 
//   :
//     [];

// console.log('local users or empty array:', myObj);

// document.addEventListener('DOMContentLoaded', () => {
//   const name = document.getElementById('name')
//   const age = document.getElementById('age')
//   const btn = document.getElementById('create')

//   btn.addEventListener('click', () => {
//     let nameVal = name.value;
//     let ageVal = age.value;

//     new User(nameVal, ageVal).render();
//     localStorage.setItem('users', JSON.stringify(myObj) );  
//   })

// })

// myObj.map( item => item.render() );

// console.log( myObj );
