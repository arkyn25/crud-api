/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./src/routes/userRoutes');
const login = require('./src/routes/loginRoutes');
const product = require('./src/routes/productRoutes');

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.use('/users', user);
app.use('/login', login);
app.use('/products', product);

app.use((err, _req, res, _next) => {
  if (!err.status) return console.log(err);
  res.status(err.status).json({ message: err.message });
});

module.exports = app;