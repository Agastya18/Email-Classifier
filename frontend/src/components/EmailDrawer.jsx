import React from 'react'
import { useState } from 'react';

const truncateFrom = (from) => {
    const index = from.indexOf(' ');
        return index !== -1 ? from.substring(0, index) : from;
  };
const EmailDrawer = ({emails}) => {
    console.log(emails)
    const [selectedEmail, setSelectedEmail] = useState(null);
    const handleEmailClick = (email) => {
        setSelectedEmail(email);
        document.getElementById('my-drawer').checked = true;
      };

      const getHeaderValue = (headers, name) => {
        const header = headers.find(header => header.name === name);
        return header ? header.value : '';
      };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Email List */}
        {
          emails.map((email, index) => (
            <div key={index} className="w-full border rounded-md p-4 cursor-pointer" onClick={() => handleEmailClick(email)}>
              <p className="font-bold text-lg">
                {truncateFrom(email.payload.headers.find(header => header.name === 'From').value)}
              </p>
              <p className="text-sm">{email.payload.headers.find(header => header.name === 'Subject').value}</p>
              <div className="flex justify-end">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-[60%]  md:w-[40%] p-4">
          {/* Drawer Content */}
          {selectedEmail ? (
            <div>
            <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold">Mail Content</h2>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
        </div>
              <p className='mb-2'><strong>From:</strong> {selectedEmail.payload.headers.find(header => header.name === 'From').value}</p>
              <p className='mb-1'><strong>Subject:</strong> {getHeaderValue(selectedEmail.payload.headers, 'Subject') || 'No subject'}</p>
              <p><strong>Mail:</strong> {selectedEmail.snippet ? selectedEmail.snippet : 'No content'}</p>

              {/* <div dangerouslySetInnerHTML={{ __html: selectedEmail.payload.body }}></div> */}
            </div>
          ) : (
            <p>No email selected</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailDrawer