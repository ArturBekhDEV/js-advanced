/*

  Завдання 1.

    Написати скрипт, який буде перемикати вкладки по натисканню
    на кнопки у хедері.

    Головна умова – змінювати файл HTML не можна.

    Алгоритм:
      1. Вибрати кожну кнопку у шапці
         + бонус вибрати одним селектором

      2. Повісити кнопку онклік
          button1.onclick = function(event) {

          }
          + бонус: один обробник на всі три кнопки

      3. Написати функцію, яка вибирає відповідну вкладку
         та додає до неї клас active

      4. Написати функцію hideAllTabs яка ховає всі вкладки.
         Видаляючи клас active з усіх вкладок

    Методи роботи:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
let btn = document.querySelectorAll(".showButton");
// let tab = document.querySelectorAll(".tab");
let tab = Array.from(document.querySelectorAll(".tab"));

console.log(tab);

btn.forEach((item) => {
  item.onclick = function (event) {
    btn.forEach((item) => {
      item.classList.remove("active-btn");
    });
    event.target.classList.add("active-btn");
    hideAllTabs();
    getTabByDataTab(event.target.dataset.tab).classList.add("active");
  };
});

function getTabByDataTab(tabId) {
  return tab.find(function (tab) {
    return tab.dataset.tab == tabId;
  });
}

function hideAllTabs() {
  tab.forEach(function (tab) {
    tab.classList.remove("active");
  });
}
