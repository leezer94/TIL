# E-Commerence App

## Approach

### Prokject setup

- Create a new project directory

- Generate a package.json file

- Install a few dependencies to help us write out project

- Create a 'start' script to run our project

---

### npm dependencies

#### express

- Helping us create a WEB server
- Library that allows us to very quickly set up a full featured Web server that cna recieve network request and respond to them

#### nodemon

- Little development tool that will automatically restart out Web server anytime our project file changes

### Timeline

1.  Browser sends HTTP header to the server
2.  Server sees request with path and method
3.  Server runs appropriate callback method
4.  THEN the browser starts transmitting information from bodt of request
5.  Browser sends a little chunk of info, waits for confirmation

         Browser sends a little chunk of info, waits for confirmation

            Browser sends a little chunk of info, waits for confirmation

               ........

6.  All chunk sent! Request complete!

---

### Middelware in Express

- Function that does some pre-processing on the 'req', 'res' object
- Primary means of code reuse in Express

---

### Data Modeling Approach

Repository Approach

- A single class (repository) is responsible for data access.
- All records are stored and used as plain JS objects

Active Record Approach

- Every record is an instance of a 'model' class that has methods to save, update, delete this record.

### User Repository

|  Method  | Input Arguments | Return Value |                          Description                          |
| :------: | :-------------: | :----------: | :-----------------------------------------------------------: |
|  getAll  |        -        |    [user]    |                     Gets a list of users                      |
|  getOne  |       id        |     user     |               Finds the user with the given id                |
| getOneBy |     filters     |     user     |             Finds one user with the given filters             |
|  create  |   attributes    |     null     |           Creates a user with the given attributes            |
|  update  | id, attributes  |     null     | Updates the user with the giben id using the given attributes |
|  delete  |       id        |     null     |               Delete the user with the given id               |
| randomID |        -        |      ID      |                     Generates a random id                     |
| writeAll |        -        |     null     |             Writes all users to a users.json file             |

- Products Repository
