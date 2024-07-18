
import axios from 'axios'
import { useEffect, useState } from 'react'

const Emailpage = () => {
  const [emails, setEmails] = useState([]);

  const truncateSubject = (subject) => {
    const index = subject.indexOf(' ');
    return index !== -1 ? subject.substring(0, index) : subject;
};

  useEffect(() => {
    const fetchEmails = async () => {
        const result = await axios.get('http://localhost:8001/emails/get-email', { withCredentials: true });
        setEmails(result.data);
        console.log(result.data)
    };
    fetchEmails();
   
}, []);
console.log(emails)
  return (
    <div className="flex flex-col gap-4 p-4  ">
  
   
    <div className="flex justify-between">
      <p className="text-xs">15</p>
      <p className="text-xs">Classify</p>
    </div>
    {/* {
      emails.map((email, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <div className="flex justify-between">
            <p className="text-xs">{email.snippet}</p>
            
          </div>
          <div className="flex justify-between">
            
            <p className="text-xs">{email.payload.headers[17].value}</p>
          </div>
        </div>
      ))
    } */}
    {
      emails.map((email,index)=>(
        <div key={index} className="w-full border rounded-md p-4">
      <p className="font-bold text-lg">{
        
        truncateSubject( email.payload.headers.find(header => header.name === 'From').value)
      }</p>
      <p className="text-sm">{ email.payload.headers.find(header => header.name === 'Subject').value}</p>
      <div className="flex justify-end">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
      </div>
    </div>
  
      ))
    }
  </div>
  )
}

export default Emailpage