const assert = require('assert');
const { forEach } = require('../index');

let numbers;
beforeEach(() => {
  numbers = [1, 2, 3];
});

it('should sum an array', () => {
  let total = 0;

  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 6);

  // this destroies numbers array to check if below it statement is actually working fine
  numbers.push(3);
  numbers.push(4);
  numbers.push(5);
  numbers.push(6);
});

it('beforeEach is ran each time', () => {
  assert.strictEqual(numbers.length, 4);
});
