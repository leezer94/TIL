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
  console.clear();
}
{
  // Objects

  const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    woroutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'forty five',
  };

  // accessing to object
  console.log(fitBitData.totalSteps);
  console.log(fitBitData.avgGoodSleep);
  console.log(fitBitData['45']);
  console.log(fitBitData[45]);

  // array brackets

  const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!',
  };

  console.log(numbers[100]);
  console.log(numbers['100']);
  console.log(numbers['76 trombones']);

  // this looks for the value of 'mysteryColor' and plugs into palette
  const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
  };

  let mysteryColor = 'yellow';

  console.log(palette[mysteryColor]);

  //Updating , Adding properites

  const userReviews = {};

  userReviews.queenBee49 = 4.5;
  userReviews['mrSmith78'] = 3.5;
  userReviews.keonhee = 28;

  userReviews.queenBee49 += 5.5;
  userReviews['mrSmith78']++;

  console.log(userReviews);

  // Arrays + Object

  const student = {
    firstName: 'keonhee',
    lastName: 'Lee',
    strengths: ['Music', 'Art'],
    exams: {
      midterm: 92,
      final: 88,
    },
  };

  const exams = student['exams'];
  const average = (exams.midterm + exams.final) / 2;
  console.log(average);

  const shoppingCart = [
    {
      product: 'Jenga Classic',
      price: 6.88,
      quantity: 1,
    },
    {
      product: 'Echo Dot',
      price: 29.99,
      quantity: 3,
    },
    {
      product: 'Jenga Classic',
      price: 39.99,
      quantity: 2,
    },
  ];

  for (const items of shoppingCart) {
    // console.log(items);
  }

  const game = {
    player1: {
      username: 'Blue',
      playingAs: 'X',
    },
    player2: {
      username: 'Muffins',
      playingAs: 'X',
    },
    board: [
      ['O', null, 'X'],
      ['X', 'X', 'O'],
      ['X', 'O', null],
    ],
  };
}

{
  // Arrays and Object Equality

  let nums = [1, 2, 3];
  let mystery = [1, 2, 3];

  console.log(nums === mystery); // output false

  let moreNums = nums;

  console.log(nums === moreNums); // true

  const user = {
    username: 'CherryGarcia8',
    email: 'fdskjf@gamil.com',
    notifications: [],
  };

  if (!user.notifications) {
    console.log('No New Notifications');
  } // it works

  if (!user.notifications === []) {
    console.log('Yes New Notifications');
  } // dosent work
  console.clear();
}
{
  // Loops ( repeating Code )
  for (let num = 1; num <= 20; num++) {
    // console.log(`${num} x ${num} : ${num * num}`);
  }

  // loops and Arrays

  const examScores = [98, 77, 84, 91, 57, 66];

  for (let i = 0; i < examScores.length; i++) {
    // console.log(examScores[i]);
  }

  const myStudents = [
    {
      firstName: 'keonhee',
      grade: 85,
    },
    {
      firstName: 'ronhja',
      grade: 25,
    },
    {
      firstName: 'mika',
      grade: 93,
    },
    {
      firstName: 'dels',
      grade: 23,
    },
  ];

  let total = 0;

  for (const student of myStudents) {
    total += student.grade;
  }
  // console.log(total / myStudents.length);

  // Nested for loops

  for (let i = 0; i <= 10; i++) {
    // console.log(`outer loops : ${i}`);
    for (let j = 10; j >= 0; j -= 2) {
      // console.log(`   inner Loops : ${j}`);
    }
  }

  const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2],
  ];

  let totalScore = 0;
  for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
      totalScore += row[j];
    }
  }

  // console.log(totalScore);

  // while loop

  const target = Math.floor(Math.random() * 10);

  let guess = Math.floor(Math.random() * 10);

  let count = 0;

  // while (guess !== target) {
  //   // console.log(`Target : ${target}, Guess : ${guess}`);

  //   guess = Math.floor(Math.random() * 10);
  //   count++;
  // }

  // Break;

  for (let i = 0; i < 10; i++) {
    // console.log(i);

    if (i > 5) {
      continue;
    }
  }

  while (true) {
    if (target === guess) break;
    // console.log(`Target : ${target}, Guess : ${guess}`);
    guess = Math.floor(Math.random() * 10);
    count++;
  }
  // console.log(`Target : ${target}, Guess : ${guess}`);
  // console.log(`you win in ${count + 1} try`);

  // for ... of

  const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];

  for (const row of magicSquare) {
    let sum = 0;
    for (const num of row) {
      sum += num;
    }
    console.log(`${row} summed to ${sum}`);
  }

  // for ... of with Object

  const movieReviews = {
    Arrival: 9.5,
    Alien: 100,
    Amile: 33,
    ajejejdm: 333,
    Bekdise: 33,
    Ckdsej: 122,
  };

  let movieArr = Object.keys(movieReviews);
  let movieRates = Object.values(movieReviews);

  for (const movie of movieArr) {
    // console.log(movie);
  }

  for (const rates of movieRates) {
    total += rates;
  }

  // console.log(total / movieRates.length);

  // for... in

  const jeopardyWinnings = {
    regularPlay: 2123123,
    watsonChallenges: 21323,
    tournermentOfChapions: 2123,
  };

  for (const prorperty in jeopardyWinnings) {
    console.log(prorperty); //output : keys
    console.log(jeopardyWinnings[prorperty]); // values
  }

  for (const k in [88, 99, 77, 66]) {
    console.log(k); // output : index
  }
  console.clear();
}
{
  // Functions

  function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
  }

  function throwDie() {
    for (let i = 0; i < 5; i++) {
      rollDie();
    }
  }

  let name = 'keonhee';

  function greet(name) {
    console.log(`Hi! ${name}`);
  }

  function isValidPassword(password, username) {
    let isValid = false;
    password = password.toString();

    if (password.length < 8) {
      isValid;
    } else if (password.includes(' ')) {
      isValid;
    } else if (password.includes(username)) {
      isValid;
    } else {
      isValid = true;
    }

    return isValid;
  }

  // console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));

  function getAvg(arr) {
    let total = arr.reduce((a, b) => a + b);

    return Math.floor(total / arr.length);
  }

  // console.log(getAvg([100, 200, 300, 100, 200]));

  function getCard() {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q', 'A'];
    const suits = ['spades', 'hearts', 'diamonds'];
    let value = Math.floor(Math.random(values) * values.length);
    let suit = Math.floor(Math.random(suits) * suits.length);

    return { value: `${values[value]}`, suit: `${suits[suit]}` };
  }

  console.log(getCard());
  console.clear();
}
{
  // Advanced Look at functions

  // Block Scope
  var animal = 'arrow';
  if (true) {
    // console.log(animal);
  }

  // console.log(animal);

  // Lexical Scope

  function outer() {
    let movie = 'Amadeus';

    function inner() {
      console.log(movie.toUpperCase());
    }

    inner();
  }

  // console.log(outer());

  // Funtion expressions

  function add1(x, y) {
    return x + y;
  }

  const add2 = function (x, y) {
    return x + y;
  };

  const add3 = (x, y) => {
    return x + y;
  };

  const product = function sum(x, y) {
    return x + y;
  };

  // Higer order Functions
  function add5(x, y) {
    return x + y;
  }
  const substract = function (x, y) {
    return x - y;
  };
  const multiply = function (x, y) {
    return x * y;
  };
  const divide = function (x, y) {
    return x / y;
  };

  const operations = [add5, substract, multiply, divide];

  for (const func of operations) {
    let result = func(100, 3);

    // console.log(result);
  }

  const thing = {
    doSomthing: multiply,
  };

  // console.log(thing.doSomthing(50, 2));

  // Functions as arguments
  function repeatNTimes(action, number) {
    for (let i = 0; i < number; i++) {
      action();
    }
  }

  function pickOne(func1, func2) {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < 0.5) {
      func1();
    } else func2();
  }

  function hate() {
    console.log('i hate this shit');
  }

  function love() {
    console.log('i love this shit');
  }

  // pickOne(hate, love);

  // Funtions as return value

  // const triple = multiplyBy(3);
  // triple(5); // 15

  // const double = multiplyBy(2);
  // double(8); // 16

  function multiplyBy(num) {
    return function (x) {
      return x * num;
    };
  }

  const triple = multiplyBy(3);
  const double = multiplyBy(2);
  const halve = multiplyBy(0.5);

  function makeBetweenFunc(from, to) {
    return function (number) {
      return number >= from && number <= to;
    };
  }

  const isChild = makeBetweenFunc(0, 18);
  const isNiceWeather = makeBetweenFunc(15, 28);

  // console.log(isChild(1));

  // Callbacks

  const stop = () => {
    alert('go away');
  };

  // setTimeout(stop, 5000);

  // using annonymous function

  // setTimeout(() => {
  //   alert('who are you');
  // }, 5000);

  const eventbutton = document.querySelector('#event-button');

  eventbutton.addEventListener('click', () => {
    setTimeout(() => {
      alert('dont click me');
    }, 500);
  });
}
{
  // Array Callback Methods

  // forEach
  const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28];

  numbers.forEach((num, i) => {
    // console.log(`numnber : ${num}`, `index : ${i}`);
  });

  //  Map

  const words = ['asap', 'byob', 'rsvp', 'diy'];

  const doubles = numbers.map((num) => {
    return num * 2;
  });

  const whichNum = numbers.map((num) => {
    if (num % 2 === 0) return 'even';

    return 'odd';
  });

  const abbreviation = words.map((word) => {
    return word.toUpperCase().split('').join('.');
  });

  // console.log(abbreviation);

  // Implicit return

  const square = (n) => n * n;

  // find();

  let movies = ['Spider Man', 'About Time', 'Mr. Deeds', 'Fantastic Four'];

  const movie = movies.find((movie) => {
    return movie.includes('S');
  });

  // filter();

  const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

  const oddNum = nums.filter((num) => num % 2 !== 0);

  const books = [
    {
      title: 'Good Omens',
      authors: ['Terry Pratchett', 'Neil Gaiman'],
      rating: 4.25,
      genres: ['fiction', 'fantasy'],
    },
    {
      title: 'Changing My Mind',
      authors: ['Zadie Smith'],
      rating: 3.83,
      genres: ['nonfiction', 'essays'],
    },
    {
      title: 'Bone: The Complete Edition',
      authors: ['Jeff Smith'],
      rating: 3.42,
      genres: ['fiction', 'graphic novel', 'fantasy'],
    },
    {
      title: 'American Gods',
      authors: ['Neil Gaiman'],
      rating: 4.11,
      genres: ['fiction', 'fantasy'],
    },
    {
      title: 'A Gentleman in Moscow',
      authors: ['Amor Towles'],
      rating: 4.36,
      genres: ['fiction', 'historical fiction'],
    },
    {
      title: 'The Name of the Wind',
      authors: ['Patrick Rothfuss'],
      rating: 4.54,
      genres: ['fiction', 'fantasy'],
    },
    {
      title: 'The Overstory',
      authors: ['Richard Powers'],
      rating: 4.19,
      genres: ['fiction', 'short stories'],
    },
    {
      title: 'The Way of Kings',
      authors: ['Brandon Sanderson'],
      rating: 4.65,
      genres: ['fantasy', 'epic'],
    },
    {
      title: 'Lord of the flies',
      authors: ['William Golding'],
      rating: 2.67,
      genres: ['fiction'],
    },
  ];

  const genre = books.filter((book) => book.genres.includes('fiction'));
  const shortForm = books.filter((book) =>
    book.genres.includes('short stories')
  );

  // console.log(shortForm);

  // Every

  const wordsss = ['dog', 'dig', 'log', 'bag', 'wag'];

  const all3 = wordsss.every((word) => word.length === 3);

  const endG = wordsss.every((word) => word[word.length - 1] === 'g');

  // console.log(endG);

  //sort

  const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

  // standart sort
  // 400.5(a) - 3000(b) = negative number
  const ascSort = prices.slice().sort((a, b) => a - b); // slice() copy the array
  const descSort = prices.slice().sort((a, b) => b - a);

  let ratingArr = [];

  for (const book of books) {
    ratingArr.push(book.rating);
  }

  // console.log(ratingArr.sort((a, b) => a - b));
  // console.log(books.sort((a, b) => a.rating - b.rating));

  // reduce()

  const grades = [93, 29, 39, 92, 91, 29, 19];

  const maxGrade = grades.reduce((max, currVal) => {
    if (currVal > max) return currVal;

    return max;
  });

  // console.log(maxGrade);

  const votes = ['y', 'n', 'absent', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'y'];

  const result = votes.reduce((tally, val) => {
    if (tally[val]) {
      tally[val]++;
    } else {
      tally[val] = 1;
    }
    return tally;
  }, {});

  // console.log(result);

  const bookss = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    console.log(key);

    // if (!groupedBooks[key]) groupedBooks[key] = [];
    // groupedBooks[key].push(book);

    // return groupedBooks;

    if (!groupedBooks[key]) {
      groupedBooks[key] = [];
    }
    groupedBooks[key].push(book);

    return groupedBooks;
  }, {});

  console.log(bookss);
  console.log(books.length);
  // {}
}
