const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

// Automatically body-parse by using Library
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    // to prevent from someone who is faking me and to encrypt all the infos that is store inside the cookie
    keys: ['2kunhee94'],
  })
);

app.get('/signup', (req, res) => {
  res.send(`
  <div>
  Your id is : ${req.session.userId}
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
app.post('/signup', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  let existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Password must match');
  }
  // Create a user in out user repository to represent this person

  const user = await usersRepo.create({ email, password });

  // Store the id of that user inside the users cookie by using 3rd party package ( fot security reason)
  req.session.userId = user.id;

  // get acces to eamil.password, confirmation
  res.send('Account created!!');
});

app.get('/signout', (req, res) => {
  // browser to forget all the informations that is stored
  req.session = null;
  res.send('You are logged out');
});

app.get('/signin', (req, res) => {
  res.send(`
  <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <button>Sign in</button>
      </form>
    </div>
  `);
});

app.post('/signin', (req, res) => {});
app.listen(3000, () => {
  console.log('Listening');
});
