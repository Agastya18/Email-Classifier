import express from 'express';
import { getEmails,classifyEmails } from '../controllers/emailController.js';

const router = express.Router();




router.get('/get-email',getEmails);
router.post('/classify', classifyEmails);


export default router;
