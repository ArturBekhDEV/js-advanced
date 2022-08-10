  /*
      Синтаксис:
     Object.defineProperty(obj, prop, descriptor) - есноўний метод управління властивостями.
     Він дозволяє оголосити властивість об'єкта і, що найголовніше, тонко налаштувати його особливі аспекти, які ніяк не змінити інакше.

     obj - Об'єкт, у якому оголошується властивість.
     prop - Ім'я властивості, яку потрібно оголосити чи модифікувати.
     descriptor - Дескриптор - об'єкт, який визначає поведінку якості
       У ньому можуть бути такі поля:
  */

  let MyObj = {};
      MyObj.title = "Prop";
      MyObj._ObjHeight = 0;
      MyObj.funcTest = function(){
        return this.name;
      };

// Object.defineProperty(
  // MyObj,
  // "name",
  // {
  // // value – значення властивості, за умовчанням undefined
  // value: "Вася",
  // // writable – значення якості можна змінювати, якщо true. За промовчанням false.
  // // writable: true,

  // // configurable – якщо true, то властивість можна видаляти, і навіть змінювати його
  // // Надалі за допомогою нових викликів defineProperty. За промовчанням false.
  // // configurable: true,

  // // enumerable – якщо true, то властивість проглядається у циклі for..in та
  // // Метод Object.keys(). За промовчанням false.
  // // enumerable: true,

  //// get - функція, яка повертає значення властивості. За замовчуванням undefined.
  // // get: () => { console.log( 'getter'); },
    
  // // Set - Функція, яка записує значення властивості. За замовчуванням undefined.
  // // set: () => { console.log( 'setter'); }
  //});

    // console.log(MyObj);

    //writable demo ->
    // MyObj.name = 10;
    // console.log('name demo:', MyObj);
    
    // configurable demo ->
    //delete MyObj.name;  
    // Object.defineProperty(MyObj, 'name', {
    //   value: 'test'
    // });
    //console.log( 'MyObj', MyObj );

    // enumerable demo ->
    // for(var key in MyObj) {
    //   console.log(key);
    // }
    // console.log( Object.keys(MyObj) );
    // console.log( 'MyObj', MyObj );

    // get / set
    // // - - - - - - - - - - - - - -
    // MyObj.name = 'test name';
    // Object.defineProperty(MyObj, "fullName", {
    //   get: function() {
    //     return `${this.title} from setter and ${this.name}`;
    //   }
    // });
    
    // console.log('FullName getter:', MyObj.fullName );
    // console.log( MyObj );
    // // // //

    // Object.defineProperty(MyObj, "height", {
    //   get: function() {
    //     return `${this._ObjHeight} cm`;
    //   },
    //   set: function( value ){
    //     this._ObjHeight = value;
    //     console.log( 'ObjHeight setter:', this._ObjHeight );
    //   }
    // });
        
    // MyObj.height = 20;
    // MyObj._ObjHeight = 55;
    // console.log( MyObj.height, 'MyObj.height' );
    // console.log( MyObj, MyObj._ObjHeight );         
