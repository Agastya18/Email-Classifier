import { fetchEmails,classifyEmail} from '../services/emailService.js';
import { google } from 'googleapis';

import dotenv from 'dotenv';
dotenv.config();


export const getEmails = async (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
    }
    try {
       
        const limit = parseInt(req.query.limit) || 15;
        const emails = await fetchEmails(req.user.tokenSecret.access_token,limit);
      //  console.log("this is in controller",emails);

        const formattedEmails = emails.map(email => ({
            subject: email.payload.headers.find(header => header.name === 'Subject').value,
            from: email.payload.headers.find(header => header.name === 'From').value,
            body: email.snippet
        }));
      //  console.log("Formatted emails:", formattedEmails);
       return res.status(200).json(formattedEmails);
        
    } catch (error) {
        return error
      //  console.log("this is in controller",error);}
    }

}


export const classifyEmails = async (req, res) => {
    try {
        const {  emails,GeminiAiKey } = req.body;
       
       // console.log("getting dat ",openaiApiKey);
    const classifiedEmails = await Promise.all(emails.map(email => classifyEmail(GeminiAiKey, email)));
    res.json(classifiedEmails);
        
    } catch (error) {
        console.log(error);
        if(error.status===429){
            res.status(429).json({ success: false, message: 'Rate limit exceeded. Please try again later.' });
        }
        
    }
};