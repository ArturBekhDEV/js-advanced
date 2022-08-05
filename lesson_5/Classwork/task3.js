/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака ест)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Dog(name, species) {
  this.name = name;
  this.species = species;
  this.status = "something";

  this.firstStatus = function () {
    if (this.status === "something" && this.name === "dog") {
      console.log("Dog is eating");
    } else {
      console.log("Dog is running");
    }
  };
}

let obj = new Dog("dog", "dontcare");
// obj.firstStatus();
// console.log(obj);

let newFunc = function () {
  for (key in obj) {
    // console.log(typeof obj[key]);
    // console.log(obj[key]);
    if (typeof obj[key] != "function") {
      console.log(key);
    }
  }
};
