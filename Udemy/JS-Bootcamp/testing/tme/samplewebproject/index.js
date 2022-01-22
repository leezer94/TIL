document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const { value } = document.querySelector('input');

  const header = document.querySelector('h1');

  if (value.includes('@')) {
    // must be valid
    header.innerHTML = 'Looks good!';
  } else {
    // must invalid
    header.innerHTML = 'Email invalid';
  }
});
