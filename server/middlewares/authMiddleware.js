const JWT = require('jsonwebtoken');
const User = require('../models/userModels');

module.exports = async (req, res, next) => {
  try {
    const token = req.header['Authorization'].split(' ')[1];
    if (!token) {
      throw new Error('Authentication token missing');
    }

    JWT.verify(token, process.env.JWT_SECRET ,(err , decode) => {
      if (err) {
        return res.status(401).send({ message: 'Please authenticate.', success: false });
      }
     else{
        req.body.userId = decode;
         next();
     }
    });
    
    next();
  } catch (e) {
    res.status(401).send({ message: 'Please authenticate.', success: false });
  }
};
