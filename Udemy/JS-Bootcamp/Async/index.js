function getData() {
  const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
    //  console.log(data);
  });
}

async function greet() {
  return 'hello';
}

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be numbers!';
  }
  return x + y;
}

// add(2, 1)
//   .then((val) => {
//     console.log('promise resolved with :', val);
//   })
//   .catch((err) => {
//     console.log('promise rejected with: ', err);
//   });

async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
  } catch (err) {
    console.log(`IN CATCH ${err}`);
  }
}

// getPlanets();

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

const button = document.querySelector('button');

// async function animateRight(el, amount) {
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
//   await moveX(el, amount, 1000);
// }

// animateRight(button, 100).catch((e) => {
//   console.log(`HAVE NO MORE SCREEN TO MOVE!`, e);
//   animateRight(button, -100, 1000);
// });

async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

  const poke1 = await prom1;

  console.log(poke1.data.name);
}

get3Pokemon();
