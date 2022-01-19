it('Shows an autocomplete', () => {
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

  const dropDown = document.querySelector('.dropdown');

  expect(dropDown.className).not.to.include('is-active');
});
