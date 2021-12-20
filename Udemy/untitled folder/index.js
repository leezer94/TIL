{
  // Nesting Conditionals

  let password = '';

  if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
      console.log('Valid Password');
    } else {
      console.log('Password is long enough, but cannnot contain spaces');
    }
  } else {
    console.log('Password must be longer');
  }

  // Truthy and Falsy values

  let loggedInUser = null;

  if (loggedInUser) {
    console.log('YOU ARE LOGGED IN');
  } else {
    console.log('PLEASE LOG IN !');
  }
}
{
  // Switch Statement

  let day = 3;

  if (day === 1) {
    console.log('Monday');
  } else if (day === 2) {
    console.log('Tuesday');
  } else if (day === 3) {
    console.log('Wednesday');
  } else if (day === 4) {
    console.log('Thursday');
  } else if (day === 5) {
    console.log('Friday');
  } else if (day === 6) {
    console.log('Saturday');
  } else if (day === 7) {
    console.log('Sunday');
  } else {
    console.log(`Invalid Day`);
  }

  switch (day) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sudday');
    default:
      console.log('Invalid day');
  }

  let emoji = 'sad face';
  switch (emoji) {
    case 'sad face':
    case 'happy face':
      console.log('yellow');
      break;

    case 'lips':
      console.log('purple');
      break;
    case 'aubergine':
      console.log('green');
      break;
  }
}
{
  // Tenary Operator
  let num = 7;

  if (num === 7) {
    console.log(`lucky`);
  } else {
    console.log('bad');
  }

  num === 7 ? console.log('lucky') : console.log('bad');

  let status = 'online';

  let color = status === 'offline' ? 'red' : 'green';

  // console.log(color);
}
{
  // Arrays and Objects

  // Arrays
  let shoppingList = ['cereal', 'milk', 'ice'];

  let lotto = [45, 12, 23, 45, 34];

  let myCollection = [12, 'dog', true, null, NaN];

  let colors = ['red', 'blue', 'green', 'violet', 'indigo'];

  colors[3] = 'milk';

  console.log(colors); // output = ['red', 'blue', 'green', 'milk', 'indigo'];

  // add to the end of array

  colors[colors.length] = 'tata'; // same as array.push() method

  console.log(colors); // output = ['red', 'blue', 'green', 'milk', 'indigo', 'tata']

  //concat

  let fruits = ['apple', 'banana'];
  let veggies = ['asparagus', 'brussel sprouts'];

  console.log(fruits.concat(veggies));

  // includes returns boolean

  let ingredients = ['water', 'corn starch', 'flour', 'brown sugar', 'shrimp'];

  if (ingredients.includes('flour') === true) {
    console.log(' I AM GLUTEN FREE I CANNOT EAT THAT');
  }

  // replace the value using splice

  let animals = ['shark', 'dog', 'monkey', 'hippo', 'whale', 'bear', 'lizard'];

  console.log(animals.splice(0, 2, 'shark!', 'OCTOPUS'));

  console.log(animals);

  // Sort
  let poeple = ['keonhee', 'ronja', 'mike', 'michale', 'lamsey'];

  let nums = [34, 10, 10000, 67, 99];

  // Const and Arrays

  const myEggs = ['brown', 'brown'];

  myEggs.push('purple');

  myEggs[0] = 'green';

  //   myEggs = ['green', 'purple'];  // this cannot muate the array

  // Nested Arrays  ( multi dimentional Array)

  const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null],
  ];

  
}
