import { initDisplay } from './display.js';
import { $total } from './DOM.js';

export const insertOperators = ({ target }) => {
  const sheet = { numOne: 0, numTwo: 0, operator: '' };

  target = target.innerText;

  if (target === 'X' || target === '/' || target === '-' || target === '+') {
    sheet.numOne = $total.innerText;
    sheet.operator = target;
    initDisplay();
  }

  localStorage.array = JSON.stringify(sheet);
};
