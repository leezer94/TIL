import { debounce } from './utils.js';

export const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  root.innerHTML = `
<label><b>Search</b></label>
<input type="text" class="input">
<div class="dropdown">
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>
`;

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultWrapper = root.querySelector('.results');

  const oninput = async (event) => {
    const items = await fetchData(event.target.value);

    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    resultWrapper.innterHTML = '';
    dropdown.classList.add('is-active');

    for (const item of items) {
      const option = document.createElement('a');

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);
        onOptionSelect(item);
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
};
