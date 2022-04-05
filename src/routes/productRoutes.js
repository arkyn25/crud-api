/* eslint-disable no-undef */
const express = require('express');

const product = require('../controllers/productController');

const validate = require('../middlewares/validators');

const route = express.Router();

route.post(
  '/',
  validate.token,
  validate.product,
  product.createProduct,
);

route.get(
  '/',
  product.productList,
);

route.get(
  '/:id',
  validate.productId,
  product.getById,
);

route.put(
  '/:id',
  validate.token,
  product.updateProduct,
);
route.delete(
  '/:id',
  validate.token,
  product.excluseProduct,
);

module.exports = route;