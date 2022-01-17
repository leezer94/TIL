const express = require('express');
const carts = require('../repositories/carts');
const cartsRepo = require('../repositories/carts');
const productRepo = require('../repositories/products');
const cartShowTemplate = require('./views/carts/show');

const router = express.Router();

// Receive a post request to add an item to a carts

router.post('/cart/products', async (req, res) => {
  // Figure out the cart!
  let cart;
  if (!req.session.cartId) {
    // We dont have a cart, we need to create one
    // and store the cart id on the req.session.cartId
    //property

    cart = await cartsRepo.create({ items: [] });

    req.session.cartId = cart.id;
  } else {
    // We have a cart! Lets get it from the repository
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  const existingItems = cart.items.find(
    (item) => item.id === req.body.productId
  );

  if (existingItems) {
    //increment quantity and save cart
    existingItems.quantity++;
  } else {
    // add new product id to items array
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }

  await cartsRepo.update(cart.id, {
    items: cart.items,
  });
  console.log(existingItems);

  // Either increment quantity for existing product
  // OR add new product items array

  res.redirect('/cart');
});
// Receive a GET request to show all items in carts

router.get('/cart', async (req, res) => {
  if (!req.session.cartId) {
    return res.redirect('/');
  } else {
    const cart = await cartsRepo.getOne(req.session.cartId);

    for (const item of cart.items) {
      // item === {id , quantity}
      const product = await productRepo.getOne(item.id);

      item.product = product;
    }

    res.send(cartShowTemplate({ items: cart.items }));
  }
});

// Receive a post request to delete an item from a cart
router.post('/cart/products/delete', async (req, res) => {
  const { itemId } = req.body;
  const cart = await cartsRepo.getOne(req.session.cartId);

  const items = cart.items.filter((item) => item.id !== itemId);

  await cartsRepo.update(req.session.cartId, { items });

  res.redirect('/cart');
});

module.exports = router;
