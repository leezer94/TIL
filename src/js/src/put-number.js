import { $total } from './DOM.js';

export const insertNumbers = ({ target }) => {
  const digit = target.innerHTML;

  if (isValidLength()) {
    if ($total.innerHTML === '0') {
      return ($total.innerHTML = digit);
    } else {
      return ($total.innerHTML += digit);
    }
  }
};

const isValidLength = () => {
  let isValid = false;
  if ($total.innerHTML.length > 2) {
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
