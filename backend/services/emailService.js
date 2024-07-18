import { google } from 'googleapis';
import axios from 'axios';

export const fetchEmails = async (access_token) => {
  

    const auth = new google.auth.OAuth2();
   // console.log(auth)
    auth.setCredentials({ access_token: access_token });
    const gmail = google.gmail({ version: 'v1', auth });
    const res = await gmail.users.messages.list({ userId: 'me', maxResults: 15 });
    const messages = res.data.messages;
    //console.log('messages-----', messages);
    const emailPromises = messages.map(message => gmail.users.messages.get({ userId: 'me', id: message.id }));
    const emails = await Promise.all(emailPromises);
    return emails.map(email => email.data);
};