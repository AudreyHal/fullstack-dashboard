const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('username', 'Username should be at least 6 characters long').isLength({ min: 6 }),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password should be at least 6 characters long').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const payload = { userId: user.id };
      const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

      res.json({ token });
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
