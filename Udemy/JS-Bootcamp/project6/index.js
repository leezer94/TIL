const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

// Automatically body-parse by using Library
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    // to prevent from someone who is faking me and to encrypt all the infos that is store inside the cookie
    keys: ['2kunhee94'],
  })
);

app.use(authRouter);

app.listen(3000, () => {
  console.log('Listening');
});
