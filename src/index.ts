import './styles.css';
import { Invoice } from './models/invoice';

// interfaces
// we define the signature of a type, but the implementation is missing.
// we can used also as a type for function signatures.
interface Person {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// the object A must implement all the signatures defined in the Person interface
const a: Person = {
  name: 'Juan',
  age: 32,
  speak: (text: string) => {
    console.log(text);
  },
  spend: (amount: number) => {
    console.log(`I spent : ${amount}`);
    return amount;
  },
  // we cannot add new fields to the object.
  /* skills: [], */
};

// this will enforce that the someone should be a Person type.
let someone: Person;

const invoice1 = new Invoice('Mario', 'work on the mario website', 250);
const invoice2 = new Invoice('Luigi', 'work on the luigi app', 300);
console.log(invoice1.format());

// only objects of type Invoice could be added to this array
let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

// if we are sure the the anchor exists, we can add a bang! operator at the end of the expression.
const anchor = document.querySelector('a')!;
// if not, the next expression will fail.
console.log(anchor.href);

// lets grab the form
// if we use the form element for the query selector, typescript can infer that the form will be of type HTMLFormElement
const form = document.querySelector('form')!;
// if we use a class, probably need to cast to the specific type.
/* const form2 = document.querySelector('.new-item-form') as HTMLFormElement; */

/* console.log(form.children); */
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
