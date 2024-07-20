
import axios from 'axios'
import EmailDrawer from '../components/EmailDrawer';
import { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
const Emailpage = () => {
  const [emails, setEmails] = useState([]);
  const [limit, setLimit] = useState(15);
  const [isClassified, setIsClassified] = useState(false);
  const [classifiedEmails, setClassifiedEmails] = useState([]);
  const [openaiApiKey, setOpenaiApiKey] = useState(localStorage.getItem('openaiApiKey') || '');

  const handleSelect = (number) => {
    setLimit(number);
  };

//   const truncateSubject = (subject) => {
//     const index = subject.indexOf(' ');
//     return index !== -1 ? subject.substring(0, index) : subject;
// };

  useEffect(() => {
    const fetchEmails = async () => {
        const result = await axios.get(`http://localhost:8001/emails/get-email?limit=${limit}`, { withCredentials: true });
        setEmails(result.data);
        console.log(result.data)
    };
    fetchEmails();
   
}, [limit]);
console.log(emails)
const classifyEmails = async () => {
  const result = await axios.post('/emails/classify', { openaiApiKey, emails });
 
  setClassifiedEmails(result.data);
  setIsClassified(true);
};
const emailsToDisplay = isClassified ? classifiedEmails : emails;
  return (

   
<>
<div className="flex justify-between">
    <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1"><FaCaretDown />{limit}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]    w-24 p-2 shadow">
  <li><a onClick={() => handleSelect('2')}>2</a></li>
  <li><a onClick={() => handleSelect('5')}>5</a></li>
  <li><a onClick={() => handleSelect('12')}>12</a></li>
    <li><a onClick={() => handleSelect('21')}>21</a></li>
    
   
  </ul>
</div>
      <button onClick={classifyEmails} className="btn  btn-active btn-secondary text-xs mr-2">Classify</button>
    </div>

<EmailDrawer emails={emailsToDisplay}/>
</>

  )
}

export default Emailpage