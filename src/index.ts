import './styles.css';

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
