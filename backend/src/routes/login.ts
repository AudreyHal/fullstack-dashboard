import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/User';
import jwt from 'jsonwebtoken';

// Create a router instance
const router = express.Router();

// Define the route for user login
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    // Validate request input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      // Find the user by username
      const user = await User.findOne({ username }).exec();
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare the provided password with the stored password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create a JWT token
      const payload = { userId: user.id };
      const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '7d' });

      // Send the token in response
      res.json({ token });
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

export default router;
