const { Engine, Render, Runner, World, Bodies } = Matter;

// BoilerPlate

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true, // by Default this is going to make the shape stay
});

World.add(world, shape);
console.log(world);
