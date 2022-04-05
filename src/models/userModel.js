/* eslint-disable no-undef */
const { ObjectId } = require('mongodb'); 
const connection = require('./connection');

const createUser = async ({ name, email, password, role }) => connection()
  .then((db) => db.collection('users').insertOne({ name, email, password, role }))
  .then((user) => ({ name, email, role, _id: ObjectId(user.insertedId) }));

const getUserByEmail = (email) => connection().then((db) =>
  db.collection('users').findOne({ email }));

module.exports = {
    createUser,
    getUserByEmail,
 };