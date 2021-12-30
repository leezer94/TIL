const colors = [
  'red',
  'orange',
  'yellow',
  'blue',
  'purple',
  'green',
  'indigo',
  'violet',
  'pink',
];

const container = document.querySelector('#boxes');

function changeColor() {
  const h1 = document.querySelector('h1');

  h1.style.color = this.style.backgroundColor;

  console.log(`${this.style.backgroundColor} colored box !!`);
}

for (const color of colors) {
  const box = document.createElement('div');

  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}

const input = document.querySelector('#username');
const items = document.querySelector('#items');

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) return;

    const newItemValue = this.value;

    const newItem = document.createElement('li');
    newItem.innerText = newItemValue;

    items.appendChild(newItem);

    this.value = '';
  }
});

// form

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   console.log(`cc ${creditCardInput.value}`);
//   console.log(`terms ${termsCheckbox.checked}`);
//   console.log(`veggieSelect ${veggieSelect.value}`);
// });

const formData = {};

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}
// creditCardInput.addEventListener('input', (e) => {
//   console.log(`CC Changed ${e}`);

//   formData['CC'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//   console.log('Veggie', e);

//   formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log('checkbox', e);
//   formData['agreeToTerms'] = e.target.checked;
// });
