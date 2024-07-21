import { google } from 'googleapis';
import axios from 'axios';

export const fetchEmails = async (access_token,limit) => {
  

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
};

export const classifyEmail = async (openaiApiKey, email) => {
    const response = await axios.post('https://api.openai.com/v1/classifications', {
        model: 'gpt-4',
        query: email.snippet,
        labels: ['important', 'promotional', 'social', 'marketing', 'spam', 'general']
    }, {
        headers: {
            'Authorization': `Bearer ${openaiApiKey}`
        }
    });
    return response.data.label;
};