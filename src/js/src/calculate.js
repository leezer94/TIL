import { $total } from './DOM.js';
import { addSecondNumToStorage } from './operation.js';

export const calculate = () => {
  addSecondNumToStorage();

  const sheet = JSON.parse(localStorage.getItem('array'));
  const { numOne, numTwo, operator } = sheet;

  if (operator === '+')
    $total.innerText = Math.floor(Number(numOne) + Number(numTwo));
  if (operator === '-')
    $total.innerText = Math.floor(Number(numOne) - Number(numTwo));
  if (operator === 'X')
    $total.innerText = Math.floor(Number(numOne) * Number(numTwo));
  if (operator === '/')
    $total.innerText = Math.floor(Number(numOne) / Number(numTwo));
};
