export const debounce = (func, delay = 1000) => {
  let timeoutId;
  // wrapper
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // automatcially keep track how many arguments we pass through
      func.apply(null, args);
    }, delay);
  };
};
