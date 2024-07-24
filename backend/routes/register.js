const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

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
      let user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      user = new User({ username, password });
      await user.save();
      res.json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
