const express = require('express');
const app = express();

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

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    // simillar to addEventListener

    req.on('data', (data) => {
      const parsed = data.toString('utf8').split('&');
      const formData = {};
      for (const pair of parsed) {
        const [key, value] = pair.split('=');
        formData[key] = value;
      }

      req.body = formData;
      next();
    });
  } else {
    next();
  }
};

// this tells router to watch for an incomming request with a path f forward / and a method of post
app.post('/', bodyParser, (req, res) => {
  console.log(req.body);
  // get acces to eamil.password, confirmation
  res.send('Account created!!');
});

app.listen(3000, () => {
  console.log('Listening');
});
