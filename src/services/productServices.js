/* eslint-disable no-undef */
const productModel = require('../models/productModel');

const createProduct = (newProduct, { _id: userId }) =>
  productModel.createProduct({ ...newProduct, userId })
    .then((product) => ({ status: 201, product }));

// const createProduct = async ({ name, quantity, userId }) => {
//   const newProduct = await productModel({ name, quantity, userId });
//   console.log('service', newProduct);
//   return newProduct;
// };

const productList = () => productModel.productList()
  .then((data) => ({ status: 200, data }));

const getById = (id) => productModel.getById(id)
  .then((product) => ({ status: 200, product }));

const updateProduct = (id, product, { _id: userId }) =>
  productModel.updateProduct(id, { ...product, userId })
  .then(() => ({ status: 200, userId }));

const excluseProduct = (id) => productModel.excluseProduct(id)
  .then(() => ({ status: 204 }));

module.exports = {
  createProduct,
  productList,
  getById,
  updateProduct,
  excluseProduct,
};