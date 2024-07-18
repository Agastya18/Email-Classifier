import { fetchEmails} from '../services/emailService.js';
import { google } from 'googleapis';

import dotenv from 'dotenv';
dotenv.config();





export const getEmails = async (req, res) => {
    
    

   // console.log(req.user.token)
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
    }
//    // console.log("this is deeeet--",req.user.tokenSecret.
//         access_token)
    try {
       
       
        const emails = await fetchEmails(req.user.tokenSecret.access_token);
        res.status(200).json(emails);
        
        
    
    } catch (error) {
        console.log("this is in controller",error);}
}