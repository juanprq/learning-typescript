import './styles.css';
import { Invoice } from './models/invoice';
import { Payment } from './models/payment';
import { ListTemplate } from './models/list-template';
import { HasFormatter } from './interfaces/HasFormatter';

// this will ensure the type of the variables
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('client', 'details', 30);
docTwo = new Payment('recipient', 'details', 15);

console.log(docOne.format());
console.log(docTwo.format());

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

docs.forEach(hasFormat => console.log(hasFormat.format()));

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

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// Generics
// we can especify what subtipes can be of T
// also we can do something like <T extends { name: string }>
const addUuid = <T extends Object>(value: T) => {
  const uuid = Math.floor(Math.random() * 100);

  return { ...value, uuid };
}

const withUuid = addUuid({ name: 'yoshi', age: 40 })
console.log(withUuid);
// this doesn't know about the name
// in order for this to work, we need to add generics definition to the function
console.log(withUuid.name);

// Enums, a set ok constants an associate them with a numeric value.
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
};

// extending interfaces
interface Resource<T> {
  uuid: number;
  resourceName: ResourceType;
  data: T;
}

const doc3: Resource<string> = {
  uuid: 1,
  resourceName: ResourceType.FILM,
  data: 'a string',
};

const doc4: Resource<object> = {
  uuid: 2,
  resourceName: ResourceType.PERSON,
  data: { value: 5 },
};

// if we log, the resource type will be resolved as a integer for the order on the enum
console.log(doc3);
