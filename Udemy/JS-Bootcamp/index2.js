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

document.body.addEventListener('click', function () {});
