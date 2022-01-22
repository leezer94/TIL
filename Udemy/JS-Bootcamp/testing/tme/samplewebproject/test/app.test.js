const assert = require('assert');
const render = require('../../render');

it('has a text input', async () => {
  const dom = await render('index.html');
  const input = dom.window.document.querySelector('input');

  assert(input);
});

it('shows a success message with a valid email', async () => {
  const dom = await render('index.html');
  const input = dom.window.document.querySelector('input');
  const h1 = dom.window.document.querySelector('h1');

  input.value = '2kunhee94@gmail.com';
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  assert.strictEqual(h1.innerHTML, 'Looks good!');
});

it('shows a success message with a invalid email', async () => {
  const dom = await render('index.html');
  const input = dom.window.document.querySelector('input');
  const h1 = dom.window.document.querySelector('h1');

  input.value = 'asdlkfj';
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  assert.strictEqual(h1.innerHTML, 'Email invalid');
});
