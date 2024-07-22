
import axios from 'axios'
import EmailDrawer from '../components/EmailDrawer';
import EmailClass from '../components/EmailClass';
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import { FaCaretDown } from "react-icons/fa";
const Emailpage = () => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [emails, setEmails] = useState([]);
  const [limit, setLimit] = useState(15);
  const [isClassified, setIsClassified] = useState(false);
 const [classifiedEmails, setClassifiedEmails] = useState([]);
  //const [openaiApiKey, setOpenaiApiKey] = useState(localStorage.getItem('openaiApiKey') || '');

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
       // console.log("this data is fetched",result.data)
       // console.log(result.data)
       
    };
    fetchEmails();
 // location.reload();
   
}, [limit]);
// console.log(emails)
const classifyEmails = async () => {
  try {
    setProcessingTo(true);
    const GeminiAiKey=localStorage.getItem('GeminiAiKey') 
    if(!GeminiAiKey){
      window.alert("Please enter openai api key in settings")
      setProcessingTo(false);
      return;
    }
   // console.log("this is openai api key frontend",openaiApiKey)
  const result = await axios.post('http://localhost:8001/emails/classify', { GeminiAiKey, emails });
 //console.log("this data is on classified",result.data)
  setClassifiedEmails(result.data);
  setIsClassified(true);
  setProcessingTo(false)
    
  } catch (error) {
    console.log(error);
    window.alert("too many requests, gemini api free tier has a limit of 15 requests per minute");
    setProcessingTo(false);
    
  }

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
  <li><a onClick={() => handleSelect('8')}>8</a></li>
    <li><a onClick={() => handleSelect('12')}>12</a></li>
    <li><a onClick={() => handleSelect('15')}>15</a></li>
    
   
  </ul>
</div>
      <button onClick={classifyEmails} disabled={isProcessing}  className="btn  btn-active btn-secondary text-xs mr-2">
        {isProcessing ? <Spinner /> : 'Classify Emails'}
      </button>
    </div>

{/* <EmailDrawer emails={emailsToDisplay} /> */}
{
  isClassified ? (
    
    <EmailClass emails={classifiedEmails } />
  ) : (
    <EmailDrawer emails={emails}/>
  )
}
</>

  )
}

export default Emailpage