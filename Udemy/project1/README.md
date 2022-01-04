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
