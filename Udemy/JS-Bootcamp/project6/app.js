const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <div>
      <form action="">
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

app.listen(3000, () => {
  console.log('i am working now ');
});
