import './functions';

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
  console.log(input);
});

const circ = (diameter: number) => {
  return Math.PI * diameter;
};

console.log(circ(3));

// this will infer the type of array of strings
const names = [
  'Luigi',
  'Mario',
  'Yoshi',
];

// if we try to add another type different to string, will fail
/* names.push(3); */

// this will infer to an array of numbers
const numbers = [1, 2, 3];

// this will fail
/* numbers.push('hi!'); */

// if we want an array of different types, we can declare it or we can force it's type
// this will infer to all the declared types number || string || boolean
const mixed = [1, 'test', 3, true];
console.log(mixed);

// this will infer with every property of the object.
let object = {
  name: 'ninja',
  belt: 'black',
  age: 32,
};

// we cannot change the name property to another type
/* object.name = 3; */

// we cannot add more properties to an already declared object.
/* ninja.skills = ['fighting', 'sneaking']; */

// this will not work because it doesn't match with the original object structure
/* object = { */
/*   name: 'test', */
/*   belt: 'orange', */
/* }; */

// Explicit Types

// we can explicitly define a variable type in case we are not assigning it immediately
let character: string;
let age: number;
let isLoggedIn: boolean;
// we can define a type and an empty array for this case
let ninjas: string[] = [];

// once a type is assigned it cannot be changed
// and we cannot assign different types to those variables
// this will help me to use all the possible methods to the defined types
// also will help me to define function signatures

ninjas.push('test');

// this is called a union type, for this case, the elements in the array can be strings or numbers.
let stringsOrNumbers: (string | number)[];
stringsOrNumbers.push(3);
stringsOrNumbers.push('test');

// this could be a string or a number
let uuid: (string | number);

// explicitly declaring object types
// this can be any object
let ninjaOne: object;
ninjaOne = { name: 'ninja', belt: 'black' };

// a strict object definition
let ninjaTwo: { name: string, age: number, beltColor: string };

// we are not allowed to do this
/* ninjaTwo = {}; */

// this is fine
ninjaTwo = { name: 'Juan', age: 32, beltColor: 'black' };

// the any type in typescript is whatever like in normal javascript
let anyAge: any = '25';
console.log(anyAge);
anyAge = 30;
console.log(anyAge);
anyAge = true;
console.log(anyAge);

let mixedArray: any[] = ['mixed', 3, true, { id: 3 }];
console.log(mixedArray);

// inferring the type of the variable greet (a function)
const greet = () => {
  console.log('Hello World!');
};

// explicitly declaring the type of greet2
const greet2: Function = () => {
  console.log('Hello World!');
};

// declaring argument types
const add = (a: number, b: number) => {
  console.log(a, b);
};

// we need to send the correct types for this function
// these arguments are mandatory.
add(5, 10);

// for this case argument c will be optional, and we can declare that behaviour using the '?' symbol
const add2 = (a: number, b: number, c: string = 'default value') => {
  console.log(a, b);
  console.log(c);
};
add2(1, 3, 'Hello!');

// we can define default values the same as we do in javascript
// if we do this, we cannot use the '?' optional symbol
const sayHi = (name: string = 'Juan') => {
  console.log(`Hi ${name}, how are you?`);
};

// this function is inferring the default return type that is a number
const minus = (a: number, b: number) => {
  return a - b;
};
let result = minus(10, 5);

// we can explicitly declare the returning type
const minus2 = (a: number, b: number): number => {
  return a - b;
};

// we can name the types
// obviously this can be a complex type
type StringOrNumber = string | number;
const test = (something: StringOrNumber) => {
  console.log(something);
};

type ObjectWithName = { name: string, uuid: string };
const objWithName: ObjectWithName = { name: 'hello', uuid: '123' };
console.log(objWithName);
