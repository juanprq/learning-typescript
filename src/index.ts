import './styles.css';

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
