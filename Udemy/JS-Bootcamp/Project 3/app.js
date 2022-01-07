const { Engine, Render, Runner, World, Bodies } = Matter;

// BoilerPlate

// Constant
const width = 500;
const height = 500;
const cells = 3;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls

const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

World.add(world, walls);

// Maze generation

const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;
    // randomly shuffling array's index
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

// creates an empty array has 3 possible places in it

// Abstract Maze demensions

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill('false'));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill('false'));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill('false'));

// Starting Point
const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThoroughCell = (row, column) => {
  // If i have visited the cell a [row,column], then return
  if (grid[row][column] === true) return;
  // Mark this cell as visited (true)
  grid[row][column] = true;
  // Assemble randomly listed order neighbors
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left'],
  ]);

  // forEach neighbor

  for (const neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // See if that neigbor is out of bounce
    if (
      nextRow < 0 ||
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
    ) {
      continue;
    }
    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn] === true) {
      continue;
    }
    // Remove a wall from either horizontals, or verticals
    console.log(direction);
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }
  }

  // Visit that next cell
};

stepThoroughCell(startRow, startColumn);

console.log(verticals);
console.log(horizontals);
