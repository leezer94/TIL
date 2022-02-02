import { $total } from './DOM.js';

const addSecondNum = () => {
  const sheet = JSON.parse(localStorage.getItem('array'));

  sheet.numTwo = $total.innerText;

  localStorage.setItem('array', JSON.stringify(sheet));
};

export const calculate = () => {
  addSecondNum();
  const sheet = JSON.parse(localStorage.getItem('array'));
  const { numOne, numTwo, operator } = sheet;

  if (operator === '+') $total.innerText = Number(numOne) + Number(numTwo);
  if (operator === '-') $total.innerText = Number(numOne) - Number(numTwo);
  if (operator === 'X') $total.innerText = Number(numOne) * Number(numTwo);
  if (operator === '/')
    $total.innerText = Math.floor(Number(numOne) / Number(numTwo));
};
