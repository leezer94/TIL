import { debounce } from './utils.js';
import { root, movieTemplate } from './template.js';

const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '61457ffc',
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return '';
  }

  return response.data.Search;
};

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultWrapper = document.querySelector('.results');

const oninput = async (event) => {
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove('is-active');
    return;
  }

  resultWrapper.innterHTML = '';
  dropdown.classList.add('is-active');

  for (const movie of movies) {
    const option = document.createElement('a');
    const imgSRC = movie.Poster === 'N/A' ? '' : movie.Poster;

    option.classList.add('dropdown-item');
    option.innerHTML = `
   <img src="${imgSRC}"/>
   ${movie.Title}
   `;

    option.addEventListener('click', () => {
      dropdown.classList.remove('is-active');
      input.value = movie.Title;
      onMovieSelect(movie);
    });

    resultWrapper.appendChild(option);
  }
};

input.addEventListener('input', debounce(oninput, 500));

document.addEventListener('click', (event) => {
  // within the Root Area
  if (!root.contains(event.target)) {
    dropdown.classList.remove('is-active');
  }
});

const onMovieSelect = async (movie) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '61457ffc',
      i: movie.imdbID,
    },
  });
  console.log(response.data);
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};
