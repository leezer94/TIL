const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

const app = express();

// Automatically body-parse by using Library
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

// this tells router to watch for an incomming request with a path f forward / and a method of post
app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  let existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Password must match');
  }
  // get acces to eamil.password, confirmation
  res.send('Account created!!');
});

app.listen(3000, () => {
  console.log('Listening');
});
