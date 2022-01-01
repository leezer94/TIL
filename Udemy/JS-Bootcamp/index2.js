const colors = [
  'red',
  'orange',
  'yellow',
  'blue',
  'purple',
  'green',
  'indigo',
  'violet',
  'pink',
];

const container = document.querySelector('#boxes');

function changeColor() {
  const h1 = document.querySelector('h1');

  h1.style.color = this.style.backgroundColor;

  console.log(`${this.style.backgroundColor} colored box !!`);
}

for (const color of colors) {
  const box = document.createElement('div');

  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}

const input = document.querySelector('#username');
const items = document.querySelector('#items');

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) return;

    const newItemValue = this.value;

    const newItem = document.createElement('li');
    newItem.innerText = newItemValue;

    items.appendChild(newItem);

    this.value = '';
  }
});

// form

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   console.log(`cc ${creditCardInput.value}`);
//   console.log(`terms ${termsCheckbox.checked}`);
//   console.log(`veggieSelect ${veggieSelect.value}`);
// });

const formData = {};

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}
// creditCardInput.addEventListener('input', (e) => {
//   console.log(`CC Changed ${e}`);

//   formData['CC'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//   console.log('Veggie', e);

//   formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log('checkbox', e);
//   formData['agreeToTerms'] = e.target.checked;
// });

// call stack

const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const scream = (str) => {
  return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);

  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1');
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};

// console.log('hello');
// makeRant('i hate my life', document.body);

const callButton = document.querySelector('#call-button');

// setTimeout(() => {
//   callButton.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     callButton.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       callButton.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         callButton.style.transform = `translateX(400px)`;
//       }, 100);
//     }, 100);
//   }, 100);
// }, 100);

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (currLeft + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${elRight + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// refactored in Promise

// moveX(callButton, 300, 1000)
// .then(() => moveX(callButton, -400, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => moveX(callButton, 10, 1000))
// .then(() => console.log('done moving'))
// .catch(({ bodyBoundary, elRight, amount }) => {
// console.log(`body is ${bodyBoundary}px wide`);
// console.log(`right is ${elRight}px, ${amount}px is too Large`);
// });

// Promise is an Object

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 5, username: 'Esmerelda' },
        ],
        '/users/1': {
          id: 1,
          username: 'Bilbo',
          upvotes: 360,
          city: 'Lisbon',
          topPostId: 454321,
        },
        '/users/5': {
          id: 5,
          username: 'Esmerelda',
          upvotes: 571,
          city: 'Honolulu',
        },
        '/posts/454321': {
          id: 454321,
          title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet',
        },
        '/about': 'This is the about page!',
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

fakeRequest('/users')
  .then((res) => {
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((res) => {})
  // this will run if any of then() is rejected
  .catch((error) => {
    console.log('OH NO', error);
  });

// Request
// AJAX

// const firstRequest = new XMLHttpRequest();

// firstRequest.addEventListener('load', function () {
//   // console.log('It Worked');
//   //referencing
//   const data = JSON.parse(this.responseText);
//   const filmUrl = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();

//   filmReq.addEventListener('load', function () {
//     // console.log('second Req works');
//     const filmData = JSON.parse(this.responseText);
//     // console.log(filmData.title);
//   });
//   filmReq.addEventListener('error', function (e) {
//     console.log('Error', e);
//   });

//   filmReq.open('get', filmUrl);

//   filmReq.send();

//   // for (const planet of data.results) {
//   //   console.log(planet.name);
//   // }
// });
// firstRequest.addEventListener('error', () => {
//   console.log('Error');
// });

// firstRequest.open('GET', 'https://swapi.dev/api/planets/');

// firstRequest.send();

// console.log('Request Sent!');

// Fetch()

// chaning fetch request

const checkStatusAndParse = (response) => {
  if (!response.ok) {
    throw new Error(`Status Code Error: ${response.status}`);
  }

  return response.json();
};

const printPlanets = (data) => {
  // console.log('Loaded 10 more planets...');
  for (let planet of data.results) {
    // console.log(planet.name);
  }

  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)

  .catch((err) => {
    console.log('something went wrong');
    console.log(err);
    // this runs when network is off
  });

//  Axios ( Library) => PreParsed of us

const fetchNextPlanetss = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
};

const printPlanetss = ({ data }) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanetss()
  .then(printPlanetss)
  .then(fetchNextPlanetss)
  .then(printPlanetss)
  .then(fetchNextPlanetss)
  .then(printPlanetss)
  .catch((err) => {
    console.log(err);
  });
