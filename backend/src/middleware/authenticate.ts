import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    // Verify the token and extract the userId
    const decoded = jwt.verify(token, 'your_jwt_secret') as { userId: string };

    // Find the user based on userId from the decoded token
    req.user = await User.findById(decoded.userId).exec();
    
    // Check if user exists
    if (!req.user) return res.status(401).send('Access denied. Invalid token.');
    
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    res.status(401).send('Access denied. Invalid token.');
  }
};

export default authenticate;
