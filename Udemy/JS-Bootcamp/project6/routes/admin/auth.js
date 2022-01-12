const express = require('express');
const usersRepo = require('../../repositories/users');

const router = express.Router();

router.get('/signup', (req, res) => {
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
router.post('/signup', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });

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

router.get('/signout', (req, res) => {
  // browser to forget all the informations that is stored
  req.session = null;
  res.send('You are logged out');
});

router.get('/signin', (req, res) => {
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

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await usersRepo.getOneBy({ email });

  if (!user) {
    return res.send('Email not found');
  }

  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );

  if (!validPassword) {
    return res.send('Invalid password');
  }

  req.session.userId = user.id;

  res.send('You are signed in');
});

module.exports = router;
