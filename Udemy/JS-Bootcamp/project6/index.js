const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');

const app = express();

// this make everthin inside of there available outside of the world
app.use(express.static('public'));
// Automatically body-parse by using Library
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    // to prevent from someone who is faking me and to encrypt all the infos that is store inside the cookie
    keys: ['2kunhee94'],
  })
);

app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);

app.listen(3000, () => {
  console.log('Listening');
});
