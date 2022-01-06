## Movie Fighter

### Big challenges

- We need to somehow fetch data about movies
  - We should attempt to fetch some data about movies from out JS code
- We need to build that autocomplete widget from scratch
  - We should sit down and write out a list of rules that describe how our movie autocomplete works
- This app would be a lot better with some styling + css!
  - The starter we just set up has a CSS framework called 'Bulma CSS' already wired up

API we are using = 'omdbapi.com'

### Debouncing an input

- Waiting for some time to pass after the last event to actually do something

### Issues with Implementation(Important)

- All code touches everything
- Autocomplete widget was supposed to be reusable
- Autocomplete has knowledge of what a movie object is
- Autocomplete has knowledge of what to show for each option
- Autocomplete has knowledge of what to do when a movie is clicked
- Many global variables that refer to specific elements
- It will be realll hard to show a second autocomplete on the screen

### index.js ( Non reusable code for our very specific project)

#### config for Autocomplete

- fetchData() function to find movie
- renderOption() function that knows how to render a movie
- inOptionSelect() function that gets invoked when a user clicks an option
- root element that the autocomplete should be rendered into

### autocomplete.js

- Super resusable code to get an autocomplete to work.
