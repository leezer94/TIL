### JS in the Browser

- Executed by adding script tags to an HTML document
- We get access to the DOM and related objects (window)
- Code can references variables in other files freely
- Include libraries by adding script tags (more complicated colutions exist

### JS with Node

- Executed by running the Node CLI from your terminal
- No DOM exist
- Each file is its own seperate world
- Inlcude libraries by using NPM ( node package manager )

exports

- Equivalent to 'module.exports', we can technically export code using this, but it is easier to use 'module.exports' because of a little corner case

require

- function to get access to the exports from another file

Module

- Object that defines some properties + information about the current file

\_\_filename

- Full path + file name of this file

\_\_dirname

- Full path of this file

### Debugging Node JS

node inspect index.js

- Start up a debugger CLI and payuse execution whenever a 'debugger' statement is hit

node --inspect index.js

- Start up a debugger instance and puase execution whenever a 'debugger' statement is hit.
- Access the debugger at 'chrome://insepct

node - insepct-brk index.js

- Start up a debugger instacne and wait to execute until a debugger is connected . Access the debugger at 'chrome://insepct'

### CLI Debugger Commnads

C

- Continue exevution until program ends or next debugger statement

N

- Run the next line of code

S

- Step in to a function

O

- Step out of the current function

### ls Commnad

No arguments

- Prints out files and folders in the current directory

With a path

- Prints outn files and folders in relative or absolute path

###

Create package.json file with "bin" section
Change index.js file permissions
Add commnet to index.js file to allow it to be treated like an executable
Link our project
