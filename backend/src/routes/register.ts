import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import User, { IUser } from '../models/User';

const router = express.Router();

// user registration route
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('username', 'Username should be at least 6 characters long').isLength({ min: 6 }),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password should be at least 6 characters long').isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    // Validate request input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    
    const { username, password } = req.body;

    try {
      // Check if the user already exists
      let user: IUser | null = await User.findOne({ username }).exec();
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user and save to the database
      user = new User({ username, password });
      await user.save();
      res.json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

export default router;
