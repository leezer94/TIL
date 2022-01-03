// factory function

function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rbb(${r},${g},${b})`;
}

hex(255, 100, 25);

function makeColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;

    return `rgb (${r},${g},${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
// const firstColor = makeColor(255, 233, 23);

// const c = makeColor(23, 544, 23);

// constructor function

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();

const black = makeColor(0, 0, 0);
black.hex();
black.rgb();

function Colors(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Colors.prototype.rgb = function () {
  const { r, g, b } = this;

  return `rgb(${r},${g},${b})`;
};

Colors.prototype.hex = function () {
  const { r, g, b } = this;

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Colors.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const newColor = new Colors(40, 255, 60);
const newColor2 = new Colors(0, 0, 0);
const rgbaColor = new Colors(222, 333, 444, 222);

// console.log(newColor.rgb());
// console.log(newColor.hex());

// console.log(rgbaColor.rgba(0.3));

// Class

class Color {
  constructor(r, g, b, name = 'banana') {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }

  innerRGB() {
    const { r, g, b } = this;

    return `${r}, ${g}, ${b}`;
  }

  rbg() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    this.h = h;
    this.s = s;
    this.l = l;
  }

  hsl() {
    const { h, s, l } = this;

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;

    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }

  fullySaturated() {
    const { h, l } = this;

    return `hsl(${h}, 100%, ${l}%)`;
  }
}

const green = new Color(40, 255, 60, 'green');

// console.log(green.rbg());
// console.log(green.hex());
// console.log(green.rgba());
// console.log(green.calcHSL());
// console.log(green.hsl());
// console.log(green.opposite());
// console.log(green.fullySaturated());

document.body.style.backgroundColor = green.fullySaturated();

// super extends subclasses

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    console.log('MEOWWWWWW!!');
  }
}

class Dog extends Pet {
  bark() {
    document.body.innerHTML = 'WOOOOOFFFFF!';
  }

  // updated
  eat() {
    return `${this.name} scarfs his food`;
  }
}

const monthy = new Cat('monthy', 23);
const bob = new Dog('Bob', 35);

console.log(monthy, bob.eat());
console.log(bob.eat());
