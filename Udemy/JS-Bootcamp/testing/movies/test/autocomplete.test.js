beforeEach(() => {
  document.querySelector('#target').innerHTML = '';

  createAutoComplete({
    root: document.querySelector('#target'),
    // give fake data to reduce testing time
    // incase we have to purchase api and so on
    fetchData() {
      return [
        { Title: 'Avengers' },
        { Title: 'Nor Avengers' },
        { Title: 'Some Other Movie' },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it('Dropdown starts closed', () => {
  const dropDown = document.querySelector('.dropdown');

  expect(dropDown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {
  const input = document.querySelector('input');

  input.value = 'Avengers';
  input.dispatchEvent(new Event('input'));

  const dropDown = document.querySelector('.dropdown');

  expect(dropDown.className).to.include('is-active');
});
