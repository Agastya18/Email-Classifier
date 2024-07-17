import express from 'express';
import passport from 'passport';
import { googleAuth, googleAuthCallback, LoginSuccess, logout } from '../controllers/authController.js';

const router = express.Router();

 router.get('/google', googleAuth);
// router.get('/google', passport.authenticate);
router.get('/google/callback', googleAuthCallback);
router.get('/login/success',LoginSuccess)
router.get('/logout', logout);

export default router;
