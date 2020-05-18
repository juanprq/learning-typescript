// we can define the type of a function
let greet: Function;
greet = (msg: string) => console.log(`greet! ${msg}`);

// we can be more specific about the function signature
// the assignation should follow the signature as is
let greet2: (a: string, b: string) => void;
greet2 = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

let calc : (a: number, b: number, c: string) => number;
calc = (numberOne: number, numberTwo: number, action: string): number => {
  if (action === 'add') {
    return numberOne + numberTwo;
  }

  return numberOne - numberTwo;
};

let logDetail: (obj: { name: string, age: number }) => void;
logDetail = (ninja: { name: string, age: number }) => {
  console.log(`name: ${ninja.name}, age: ${ninja.age}`);
};
