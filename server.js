require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');

const app = express();

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

// Separated Routes for each Resource

const menuRoutes = require('./routes/menu_items_route');
const getOrders = require('./routes/orders.js');
const orderRoutes = require('./routes/place_order.js');
const twilio = require('./routes/twilio');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client error codes,
// cyan for redirection codes, and uncolored for all other codes.

app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well

app.use(knexLogger(knex));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${__dirname}/public/styles`,
  debug: true,
  outputStyle: 'expanded',
}));
app.use(express.static('public'));

// Mount all resource routes

app.use('/api', menuRoutes(knex));
app.use(orderRoutes(knex));
app.use('/api', getOrders(knex));

// Home page

app.get('/', (req, res) => {
  res.render('index');
});

// Cart

app.get('/cart', (req, res) => {
  res.render('cart');
});

// Orders

app.post('/cart/place_order', (req, res) => {
  res.redirect('/cart');
});

app.get('/order', (req, res) => {
  res.render('order');
});

// Twilio

app.use('/twilio', twilio);

// Boot

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

