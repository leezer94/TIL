## Big issues

- Need to detect when a file changes

  - Use a package called `chokidar` to detect file changes

- It would be nice to provide some help to user of our CLI tool

  - Use a package called `caporal` to build our CLI tool

- Need to figure out how to execute some JS code from within a JS program

  - Use the standard Library module `child_process` to execute a program

### Time Line

- Watchit starts up
- Chokidar 'adds' a file
- We starts up the user's code
- Chokidar 'adds' a file
- We stop the users program we just created
- We starts up the user's code
- Chokidar 'adds' a file
- We stop the users program we just created
- We starts up user's code
