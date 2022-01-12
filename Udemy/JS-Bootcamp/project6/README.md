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

## Rather than exporting the entire class of users repository instead export an instance

## Cookie based Athentication

- for every domain you visit , you are going to have a different set of cookies

## Hashing Algorithm ( sha256 online hashing password)

`Password` => `Hasing algorithm` => `encrypted value (dsfjdskdsl76da76s76easd76s)`

- We stored the `hashed output` instead of actuall `Password`

- when user looging in comaper `hashed output` to `hashed input`

### Rainbow table attack

- A rainbow table attack is a password cracking method that uses a special table (a “rainbow table”) to crack the password hashes in a database. ... After the user enters their password to login, it is converted to hashes, and the result is compared with the stored hashes on the server to look for a match.

### Salting + Hashing Password

- Password Salting is a technique used to help protect passwords stored in a database from being reverse-engineered by hackers who might breach the environment. Password salting involves adding a string of between 32 or more characters to a password and then hashing it.

## Project Structure

### Project Directories

<figure>
    <img src="images/Screen Shot 2022-01-12 at 1.24.28 PM.png">
    <caption>ref : Udemy Colt Steele JS Bootcamp</caption>
</figure>
