const JWT = require('jsonwebtoken');
const User = require('../models/userModels');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Authentication token missing');
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Please authenticate.', success: false });
      }
      req.body.userId = decode.id;
      next();
    });
  } catch (e) {
    res.status(401).send({ message: 'Please authenticate.', success: false });
  }
};

module.exports = auth;
