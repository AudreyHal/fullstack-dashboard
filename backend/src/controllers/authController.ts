import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';


export const loginController = async (req: Request, res: Response) => {
  // validates request input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // finds the user by username
    const user = await User.findOne({ username }).exec();
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // compares the provided password with the stored password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // creates a JWT token
    const payload = { userId: user.id };
    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '7d' });

    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};


export const registerController = async (req: Request, res: Response) => {
  // Validate request input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
};
