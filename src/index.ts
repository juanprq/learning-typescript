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
