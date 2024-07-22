import { google } from 'googleapis';

import axios from 'axios';
import {
    GoogleGenerativeAI,
    
  } from"@google/generative-ai";


 
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

export const fetchEmails = async (access_token,limit) => {
  

   try {
    const auth = new google.auth.OAuth2();
    // console.log(auth)
     auth.setCredentials({ access_token: access_token });
      const gmail = google.gmail({ version: 'v1', auth });
     const res = await gmail.users.messages.list({ userId: 'me', maxResults: limit });
     const messages = res.data.messages;
     //console.log('messages-----', messages);
     const emailPromises = messages.map(message => gmail.users.messages.get({ userId: 'me', id: message.id }));
     const emails = await Promise.all(emailPromises);
     return emails.map(email => email.data);
    
   } catch (error) {
    console.error(error)
   }








   
};

export const classifyEmail = async (GeminiAiKey, email) => {

    try {
      
    const genAI = new GoogleGenerativeAI(GeminiAiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "  i will give you emails with subject and  mail body, classify emails into important, Promotional, social, marketing, and spam categories in JSON formate.",
      });
     
  
    const chatSession = model.startChat({
        generationConfig,

      });

  const inputd = {
    subject: email.subject,
    body: email.body
  };
      const result = await chatSession.sendMessage(inputd.subject+inputd.body);
  //console.log(result.response.text());
  const classifeid = JSON.parse(result.response.text());
 // console.log("json",classifeid)
  
   
    return {
         body: email.body,
         from:email.from,
         subject: email.subject,
         classifeid
    };
      
    } catch (error) {
      console.log("this is eroor====---",error)
    
       return res.status(429).json({ success: false, message: 'Rate limit exceeded. Please try again later.' });
     
     
     
      
    }



};