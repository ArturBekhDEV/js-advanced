/*

Завдання:

     Написати за допомогою async-await скрипт, який:

     Отримує список користувачів: https://jsonplaceholder.typicode.com/users
     Перебирає, виводить табличку:

     #   | userName | email          | Показати webiste | Показати телефон |
     1. | userName | email@test.com | button | button
     2. | userName | email@test.com | 20/10/2019 | button
     3. | userName | email@test.com | button | button
     4. | userName | email@test.com | button | button

     Дані про сайт та номер телефону приховувати під час виведення та показувати під час кліку.

*/

// toggle class showhide для кнопок для запросу телефон

let usernamefirst = document.querySelectorAll(".user");
let emailuser = document.querySelectorAll(".email");
let btnWebsite = document.querySelectorAll(".btn-website");
let btnTelephone = document.querySelectorAll(".btn-telephone");
let spanWebsite = document.querySelectorAll(".span-website");
let spanTelephone = document.querySelectorAll(".span-telephone");

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  await data.json().then((res) => {
    let user = res.map((item) => item.name);
    let userSplice = user.splice(0, 4);
    usernamefirst.forEach((el, index) => {
      el.innerHTML = userSplice[index];
    });
    let email = res.map((item) => item.email);
    let emailSplice = email.splice(0, 4);
    emailuser.forEach((el, index) => {
      el.innerHTML = emailSplice[index];
    });

    btnWebsite.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        btn.classList.add("btn-hide");
        let website = res.map((item) => item.website);
        let websiteSplice = website.splice(0, 4);

        if (e.target.id === "1") {
          spanWebsite[0].innerHTML = websiteSplice[0];
        } else if (e.target.id === "2") {
          spanWebsite[1].innerHTML = websiteSplice[1];
        } else if (e.target.id === "3") {
          spanWebsite[2].innerHTML = websiteSplice[2];
        } else if (e.target.id === "4") {
          spanWebsite[3].innerHTML = websiteSplice[3];
        }
      });
    });

    btnTelephone.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        btn.classList.add("btn-hide");
        let website = res.map((item) => item.phone);
        let websiteSplice = website.splice(0, 4);

        if (e.target.id === "1") {
          spanTelephone[0].innerHTML = websiteSplice[0];
        } else if (e.target.id === "2") {
          spanTelephone[1].innerHTML = websiteSplice[1];
        } else if (e.target.id === "3") {
          spanTelephone[2].innerHTML = websiteSplice[2];
        } else if (e.target.id === "4") {
          spanTelephone[3].innerHTML = websiteSplice[3];
        }
      });
    });
  });
}
getData();

let btttest = document.querySelectorAll(".test");

btttest.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.add("btn-hide");
    console.log("clicked");
  });
});
