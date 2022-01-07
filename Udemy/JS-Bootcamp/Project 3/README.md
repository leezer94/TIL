# WEB MAZE GAME

---

## BIG CHALLENGES

### How do we generate a MAZE ?

- Many algorithms to generate a maze. We will have to learn a bit about a `tree data structure + recursion` to implement the simplest algorithm

### How are we going to do this thing on the screen ?

- Use Matter JS to draw the maze onto a canvas element (brm.io/matter-js)

### How do we make some keyboard keys control the ball ?

- Matter JS has the ability to map key presses to movements of shapes

### How do we detect when the ball touches the green square ?

- Matter JS has the ability to detect collsions between different shapes and report them to us as events

---

## Matter JS Terminology

#### World ( Object tracks the location, position, speed )

- Object that contains all of the different `things` in out matter App

#### Engine ( )

- Reads in the current state of the world from the world object, then calculates change in positions of all the different shapes

#### Runner

- Gets the engine an world to work together, Runs about 60times per second.

#### Render ( view )

- Whenever the engine processes an update, Render will take a look at all the different shapes and show them on the screen

#### Body

- A shape that we are displaying. Can be circle, rectangle, oval, etc

---
