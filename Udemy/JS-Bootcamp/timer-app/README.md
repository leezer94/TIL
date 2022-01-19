## Things Our Program does

- Displays a Timer
- Shows an animated border around the timer

### Possible Implementation

- Event listener to watch for a click on 'start' button `timer related`
  - Draw a full border around the timer `border related`
  - Start counting down the timer `timer related`
  - Each time the timer counts down, update the boredr `border related`
  - Each time the timer counts down, update the text `timer related`
  - If we counted down and timer reaches 0 `border related`
    - Reset the boredr `timer related`
    - Reset internal timer to get ready for another run `border related`

* We should insted try to isolate all the different responsibilities

### Better Possible Implementation

- Event listener to watch for a click on 'start' button `timer related`
  - Emit an event stating taht the timer has started `border related`
    ( Watch for the event. When it occurs, draw the border)
  - Start counting down the timer `timer related`
  - Emit an event that the timer has 'ticked `border related`
    (Watch for this event. When it occurs, update the border)
  - Each time the timer counts down, update the text `timer related`
  - If we counted down and timer reaches 0 `border related`
    - Emit an event that the timer is done `border related`
      (Watch for this event. When it occurs, reset the border)
    - Reset internal timer to get ready for another run `border related`

---

## Class Timer

- constructor (durationInput, startButton, pauseButton)
- start()
- pause()
- onDurationChange()
- tick()

## The value of `this`

- Did you define a function with an arrow function ?
  - Write 'console.log(`this`)' one the first valud line above the arrow function.
  - Value of `this` in the arrow function will be equal to that console.log
- Did you call `bind`, `call` or `apply` on the function when you invoked it?
  - `this` is equal to the first argument of `bind`, `call` or `apply`
- All other cases
  - `this` is equal to whatever is to the left of the `.` in the method call

## SVG Element

- SVG stands for Scalable Vector Graphics

Start

- dasharray = perimeter
- dashoffset = 0
  End
- dashoffset = perimeter
- dashoffset= -1 \* perimeter

formula
offset = (perimeter \* timeRemaining) / totalDuration - perimeter

offsetStart = p \ 30 / 30 - p
offsetEnd = p - 0 / 30 - p
