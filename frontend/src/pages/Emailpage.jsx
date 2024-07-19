
import axios from 'axios'
import EmailDrawer from '../components/EmailDrawer';
import { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
const Emailpage = () => {
  const [emails, setEmails] = useState([]);

//   const truncateSubject = (subject) => {
//     const index = subject.indexOf(' ');
//     return index !== -1 ? subject.substring(0, index) : subject;
// };

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
//     <div className="flex flex-col gap-4 p-4  ">
  
   
//     <div className="flex justify-between">
//     <div className="dropdown dropdown-bottom">
//   <div tabIndex={0} role="button" className="btn m-1"><FaCaretDown />Click</div>
//   <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]    w-24 p-2 shadow">
//     <li><a>21</a></li>
//     <li><a>1 2</a></li>
//   </ul>
// </div>
//       <button className="btn  btn-active btn-secondary text-xs">Classify</button>
//     </div>
   
//     {/* {
//       emails.map((email,index)=>(
//         <div key={index} className="w-full border rounded-md p-4">
//       <p className="font-bold text-lg">{
        
//         truncateSubject( email.payload.headers.find(header => header.name === 'From').value)
//       }</p>
//       <p className="text-sm">{ email.payload.headers.find(header => header.name === 'Subject').value}</p>
//       <div className="flex justify-end">
//         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
//       </div>
//     </div>
  
//       ))
//     } */}

//     <div className="drawer drawer-end">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Page content here */}
//     {/* <label htmlFor="my-drawer-4" className="drawer-button btn ">
   
//     </label> */}
//     {
//       emails.map((email,index)=>(
//         <div key={index} htmlFor="my-drawer-4" className="w-full border rounded-md p-4  ">
//       <p className="font-bold text-lg">{
        
//         truncateSubject( email.payload.headers.find(header => header.name === 'From').value)
//       }</p>
//       <p className="text-sm">{ email.payload.headers.find(header => header.name === 'Subject').value}</p>
//       <div className="flex justify-end">
//         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
//       </div>
//     </div>
  
//       ))
//     }
   
//   </div>

// </div>
//   </div>
<EmailDrawer emails={emails}/>
  )
}

export default Emailpage