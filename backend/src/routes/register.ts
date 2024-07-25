import { registerController } from 'controllers/authController';
import express from 'express';
import { check } from 'express-validator';

const router = express.Router();

// user registration routes
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('username', 'Username should be at least 6 characters long').isLength({ min: 6 }),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password should be at least 6 characters long').isLength({ min: 6 }),
  ],
  registerController
);

export default router;
