/* eslint-disable no-undef */
const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createProduct = async ({ name, quantity, userId }) => connection()
  .then((db) => db.collection('product').insertOne({ name, quantity, userId }))
  .then((product) => ({ name, quantity, userId, _id: ObjectId(product.insertedId) }));

const productList = () => connection()
  .then((db) => db.collection('product').find({}).toArray()).
  then((products) => products);

const getById = (id) => connection()
  .then((db) => db.collection('product').findOne(ObjectId(id)));

const updateProduct = (id, product) => connection()
  .then((db) => db.collection('product')
  .updateOne({ _id: ObjectId(id) }, { $set: product }));

const excluseProduct = (id) => connection()
  .then((db) => db.collection('product')
  .deleteOne({ _id: ObjectId(id) }));

module.exports = {
  createProduct,
  productList,
  getById,
  updateProduct,
  excluseProduct,
};