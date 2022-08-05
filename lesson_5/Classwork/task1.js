/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let train = {
  name: "Train",
  speed: 70,
  people: 15,
  trainRun() {
    console.log(
      `${this.name} comes with ${this.people} with speed ${this.speed}!`
    );
  },

  trainStay() {
    console.log(`${this.name} pause.Speed is ${this.speed}!`);
  },

  takePassangers(x) {
    console.log(`We take more passangers for ${this.people + x}`);
  },
};

train.trainRun();
train.trainStay();
train.takePassangers(15);
