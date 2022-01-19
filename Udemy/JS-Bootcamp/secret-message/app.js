const form = document.querySelector('form');
const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const MessageInput = document.querySelector('#message-input');
  const encrypted = btoa(MessageInput.value);

  const input = document.querySelector('#link-input');
  input.value = `${window.location}#${encrypted}`;
  // texts are selecetd by default()
  input.select();
  console.log(hash);
});
