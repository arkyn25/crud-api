const validate = require('../utils/validators');

const user = (req, _res, next) => validate.user(req.body)
  .then(() => next())
  .catch(({ message }) => next({ status: 400, message }));

const userExists = (req, _res, next) => validate.userExists(req.body)
  .then(() => next())
  .catch(({ message }) => next({ status: 409, message }));

const login = (req, _res, next) => validate.login(req.body)
  .then(() => next())
  .catch(({ message }) => next({ status: 401, message }));

const product = (req, _res, next) => validate.product(req.body)
  .then(() => next())
  .catch(({ message }) => next({ status: 400, message }));

const token = (req, _res, next) => validate.token(req.headers)
  .then((userData) => {
    req.user = userData;
    next();
  })
  .catch(({ message }) => next({ status: 401, message }));

const productId = (req, _res, next) => validate.productId(req.params.id)
  .then(() => next())
  .catch(({ message }) => next({ status: 404, message }));

module.exports = {
  user,
  userExists,
  login,
  product,
  token,
  productId,
};