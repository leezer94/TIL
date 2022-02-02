import { $total } from './DOM.js';

export const printNumberToScreen = ({ target }) => {
  const digit = target.innerText;

  if (isValidLength()) {
    if ($total.innerText === '0') {
      return ($total.innerText = digit);
    } else {
      return ($total.innerText += digit);
    }
  }
};

const isValidLength = () => {
  let isValid = false;

  if ($total.innerText.length > 2) {
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
