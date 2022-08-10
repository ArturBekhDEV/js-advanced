// /*
// Заглиблюємося у прототипи
// Згадаймо, що і себе представляють прототипи в JS
// */

//   let cat = {
//     breed: 'Balinese',
//     eats: true,
//     test: () => {
//       console.log( '123 ')
//     }
//   };

//   // cat.prototype.test2 = 'fchg';
//   // console.log(cat);

//   let myCat = { name: 'Luna', value: '123'};
//   Object.setPrototypeOf(myCat, cat);

//   // console.log( myCat.name );  // Luna
//   // console.log('myCat.breed', myCat.breed ); // Balinese
//   // console.log('myCat.eats', myCat.eats );  // true
//   // console.log('myCat', myCat );       // { name: Luna, __proto__: Object }

//   /*
// JS - Прототипна, об'єкто-орієнтована мова.
// Прототип є просто посиланням, що вказує на об'єкт "Батька"
// І може бути нескінченну вкладеність їх один в одного
// Пишеться у властивість __proto__ будь-якого об'єкта
// Що ж являє собою прототип
//   */

//   //console.log( Object.prototype );

//   /*
// Кожен наш прототип, який ми створюємо успадковує всі свої методи з
// "Батьківського" об'єкта. Перевіримо це:
//   */

//   // console.log('cat proto equal to obj.prototype', cat.__proto__ === Object.prototype ); // true

//   /*
//     Переконаємося у цьому – модифікуємо наш Object.prototype;
//   */

//   //Object.prototype.learning = true;


//   // // //
//   // console.log( 'cat.__proto__.learning', cat ); 
//   // console.log( cat, cat.learning );

//   // let test = {};

//   // console.log(test)

//   /*
// Різниця між __proto__ і prototype у тому, що:
// Перший є властивістю, яка вказує на об'єкт, який є прототипом для поточного об'єкта.
// А другий, це властивість ФУНКЦІЇ, яка застосовується тільки до функцій конструкторів
// і буде використано для створення нового об'єкта із приставкою new Fn/
//   */
//   //

//   // 

//   let Hamster = function( name, count ){
//     this.name = name;
//     this.count = count;
//     let test = '';
//     this.addCounter = function( num ){
//       this.count += num;
//       console.log('new count', this.count);
//     }
//   };

//   Hamster.prototype.animal = 'mammal';
//   Hamster.prototype.addCounter = function( num ){
//     this.count += num;
//     console.log('new count', this.count);
//   }

//   let myNewHamster = new Hamster("test1", 1);
//   let myNewHamster2 = new Hamster("test2", 100);
  
//   console.log( 'myNewHamster.animal:', myNewHamster, myNewHamster2 );
//   myNewHamster2.addCounter(10);
//   myNewHamster.addCounter(20);
//   // // // // //
//   let myNewHamster3 = new Hamster("test2", 10);
//       myNewHamster3.addCounter(20);

//     /*
// Метод Object.create() створює новий об'єкт із зазначеними об'єктом прототипу
// та властивостями.

//       Object.create(proto, [propertiesObject])
//     */

//   let Human = {
//     asd: "123",
//     eat: function(){
//       console.log('Human eat food:', this.food);
//     }
//   };

//   let Jessie2 = Object.create( Human );
//       // Jessie2 = {};
//       Jessie2.food = 'Tako';
//       console.log( Jessie2 );
//     Jessie2.eat();

//   function objectCreate( proto ){
//     let obj = {};
//     Object.setPrototypeOf(obj, proto);
//     return obj;
//   }

//   let Jessie3 = objectCreate(Human);

//   console.log(Jessie3);

///*
// Розберемо трохи роботу із ключовим словом new
// */

///*
// Що робить ключове слово New:
// 1. Створюється новий порожній об'єкт, і він присвоюється цим.
// 2. Виконується код функції. Зазвичай він модифікує це, додає туди нові властивості.
// 3. Повертається значення цього.
// */

//   // код тільки для прикладу

      // function User(name) {
      //   // this = {};  (неявно)

      //   // додає властивості до цього
      //   this.name = name;
      //   this.isAdmin = false;

      //   // return this;  (неявно)
      // }
//   }


//   function Test(name) {
//     this.name = name;
//   }

//   Test.prototype.test = 'some test text';
//   Test.prototype.doSmth = function() {
//     alert('working');
//   }


//   const test = customNew(Test, 'some name');

//   console.log(test);



function Person(name){
  this.name = name;
}

Person.prototype.human = true;
Person.prototype.sayMyName = function(){
  console.log('My name is', this.name);
};

let heisenberg = new Person('Haisenberg');
    heisenberg.sayMyName();
console.log( heisenberg );

