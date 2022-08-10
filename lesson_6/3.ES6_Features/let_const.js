/*
      let and const variables
      Docs:
      let:   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
      const:   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
*/

var x = null;
let y = null;
const z = null;

// declarative func
// block scope

function letDemo() {
  var SomeVariable = '10';

  if (true) {
    let SomeVariable = "5";
    console.log('in scope:', SomeVariable);
  }

  console.log('out of scope:', SomeVariable);
}

// letDemo();

// for (var index = 0; index < 4; index++) {
//   console.log(index);    
// }

// console.log(index);

// console.log(a);

// cant declare the same variable name with let and var as well!
// var a = 'asdasdasd';
// let a = 1234;
// console.log(a);
//   let b = 0;
//   b = 'asdasdasdasd';  

//   console.log(b);

//const IMMUTABLE_VARIABLE = 3;
//         //IMMUTABLE_VARIABLE = IMMUTABLE_VARIABLE + 1; // ERROR
//   //
const IMMUTABLE_OBJ = { animal: 'cat', name: 'Luna' };
//       //   IMMUTABLE_OBJ = { animal: 'dog', name: 'Wolf'}; // error
//         IMMUTABLE_OBJ.age = '12';
//         IMMUTABLE_OBJ.animal = 'dog';
//         IMMUTABLE_OBJ.name = 'Wolf';
//         console.log( 'key assigment', IMMUTABLE_OBJ );
//   // //
//   const IMMUTABLE_ARRAY = [];
//         IMMUTABLE_ARRAY.push("A");
//   console.log( IMMUTABLE_ARRAY );
//IMMUTABLE_ARRAY = ["B"]; // ERROR


const myFunc = function () { }
//myFunc();

var test = function () { }
const test = 'ettetet'


