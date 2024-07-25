import { loginController } from 'controllers/authController';
import express from 'express';
import { check } from 'express-validator';

const router = express.Router();

// user login routes
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  loginController
);

export default router;