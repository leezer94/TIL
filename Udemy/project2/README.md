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

### Issues with Implementation

- All code touches everything
- Autocomplete widget was supposed to be reusable
- Autocomplete has knowledge of what a movie object is
- Autocomplete has knowledge of what to show for each option
- Autocomplete has knowledge of what to do when a movie is clicked
- Many global variables that refer to specific elements
- It will be realll hard to show a second autocomplete on the screen
