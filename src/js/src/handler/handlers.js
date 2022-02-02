import { $ } from '../DOM.js';
import { printNumberToScreen } from '../put-number.js';
import { initDisplay } from '../display.js';
import { addFirstNumToStorage } from '../operation.js';
import { calculate } from '../calculate.js';

export const bindHandlers = () => {
  const $digits = $('.digits');
  const $modifier = $('.modifier');
  const $operator = $('.operations');
  const $equaSign = $('#equal-sign');

  $digits.addEventListener('click', printNumberToScreen);
  $modifier.addEventListener('click', initDisplay);
  $operator.addEventListener('click', addFirstNumToStorage);
  $equaSign.addEventListener('click', calculate);
};
