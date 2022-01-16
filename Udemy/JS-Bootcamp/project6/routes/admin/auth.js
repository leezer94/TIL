const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../views/admin/auth/signup');
const signinTemplate = require('../views/admin/auth/signin');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require('./validators');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

// this tells router to watch for an incomming request with a path f forward / and a method of post
// Validation
// check (express-validation) docmentation
router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body;
    // Create a user in out user repository to represent this person

    const user = await usersRepo.create({ email, password });

    // Store the id of that user inside the users cookie by using 3rd party package ( fot security reason)
    req.session.userId = user.id;

    // get acces to eamil.password, confirmation
    res.redirect('admin/products');
  }
);

router.get('/signout', (req, res) => {
  // browser to forget all the informations that is stored
  req.session = null;
  res.send('You are logged out');
});

router.get('/signin', (req, res) => {
  // passing and empty object to prevent from getting Errors
  res.send(signinTemplate({}));
});

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.redirect('admin/products');
  }
);

module.exports = router;
