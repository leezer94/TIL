const express = require('express');
const { check, validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../views/admin/auth/signup');
const signinTemplate = require('../views/admin/auth/signin');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

// this tells router to watch for an incomming request with a path f forward / and a method of post
// Validation
// check (express-validation) docmentation
router.post(
  '/signup',
  [
    check('email')
      .trim()
      .normalizeEmail()
      .isEmail()
      .custom(async (email) => {
        const existingUser = await usersRepo.getOneBy({ email });

        if (existingUser) {
          throw new Error('Email in use');
        }
      }),
    check('password').trim().isLength({ min: 4, max: 20 }),
    check('passwordConfirmation')
      .trim()
      .isLength({ min: 4, max: 20 })
      .custom(async (passwordConfirmation, { req }) => {
        if (passwordConfirmation !== req.body.password) {
          throw new Error('Passwords must match');
        }
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    const { email, password, passwordConfirmation } = req.body;
    // Create a user in out user repository to represent this person

    const user = await usersRepo.create({ email, password });

    // Store the id of that user inside the users cookie by using 3rd party package ( fot security reason)
    req.session.userId = user.id;

    // get acces to eamil.password, confirmation
    res.send('Account created!!');
  }
);

router.get('/signout', (req, res) => {
  // browser to forget all the informations that is stored
  req.session = null;
  res.send('You are logged out');
});

router.get('/signin', (req, res) => {
  res.send(signinTemplate());
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
