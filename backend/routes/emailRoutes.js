import express from 'express';
import { getEmails } from '../controllers/emailController.js';

const router = express.Router();

// const isAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.status(401).send('Not authenticated');
// };

router.get('/get-email', getEmails);
// router.post('/classify', classifyEmails);

export default router;
