/* eslint-disable no-undef */
const productService = require('../services/productServices');

const createProduct = (req, res) => productService.createProduct(req.body, req.user)
  .then(({ status, product }) => res.status(status).json({ product }));
  
const productList = (_req, res) => productService.productList()
  .then(({ status, data }) => res.status(status).json(data));

const getById = (req, res) => productService.getById(req.params.id)
  .then(({ status, product }) => res.status(status).json(product));

const updateProduct = (req, res) => productService.updateProduct(req.params.id, req.body, req.user)
  .then(({ status, userId }) => res.status(status)
  .json({ _id: req.params.id, ...req.body, userId }));

const excluseProduct = (req, res) => productService.excluseProduct(req.params.id)
  .then(({ status }) => res.status(status).json());

module.exports = {
  createProduct,
  productList,
  getById,
  updateProduct,
  excluseProduct,
};