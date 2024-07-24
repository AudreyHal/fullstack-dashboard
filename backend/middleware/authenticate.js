const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = await User.findById(decoded.userId);
    if (!req.user) return res.status(401).send('Access denied. Invalid token.');
    next();
  } catch (err) {
    res.status(401).send('Access denied. Invalid token.');
  }
};

module.exports = { authenticate };
