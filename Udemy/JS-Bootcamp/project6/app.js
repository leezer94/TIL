const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Automatically body-parse by using Library
app.use(bodyParser.urlencoded({ extneded: true }));

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
app.post('/', (req, res) => {
  console.log(req.body);
  // get acces to eamil.password, confirmation
  res.send('Account created!!');
});

app.listen(3000, () => {
  console.log('Listening');
});
