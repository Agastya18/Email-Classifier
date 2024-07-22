import React from 'react'
import { useState } from 'react';
const truncateFrom = (from) => {
    const index = from.indexOf(' ');
        return index !== -1 ? from.substring(0, index) : from;
  };
const EmailClass = ({emails}) => {
  //  console.log("in classifeid section: ",emails)
    const [selectedEmail, setSelectedEmail] = useState(null);
    const handleEmailClick = (email) => {
        setSelectedEmail(email);
        document.getElementById('my-drawer').checked = true;
      };
      const filteredEmails = emails.filter(email => !email?.status || email.status !== '429');
     // console.log("this is filtered",filteredEmails)
  return (
    <div className="drawer drawer-end">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Email List */}
      {
        filteredEmails.map((email, index) => (
          <div key={index} className="w-full hover:bg-slate-100 border rounded-md p-4 cursor-pointer" onClick={() => handleEmailClick(email)}>
            <p className="font-bold text-lg">
              {email?.from}
            </p>
            <p className="text-sm">{email?.subject}</p>
            <div className="flex justify-end">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
                {
                    email.classifeid? email.classifeid.category: ""
                    
                }
              </span>
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
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {
                selectedEmail.classifeid? selectedEmail.classifeid.category: ""
            }
        </span>
      </div>
            <p className='mb-2'><strong>From:</strong> {
                selectedEmail.from
            }</p>
            <p className='mb-1'><strong>Subject:</strong> {
                selectedEmail.subject
            } </p>
            <p><strong>Mail:</strong> {selectedEmail.body ? selectedEmail.body : 'No content'}</p>

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

export default EmailClass