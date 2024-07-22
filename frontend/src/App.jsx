import {Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login.jsx';
import Dash from './components/dash.jsx'
import Emailpage from './pages/Emailpage.jsx';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import { useState,useEffect } from 'react';
const EmailWithNavbar = ({ user }) => (
  <>
    <Navbar user={user} />
    <Emailpage />
  </>
);
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser=()=>{
      axios.get('http://localhost:8001/auth/login/success', { withCredentials: true })
    .then(res => {
     // console.log(res.data)
      setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    } 

    getUser()
    


  },[])


 

  return (
    <>
    {/* <Navbar user={user}/> */}
    <Routes>
      <Route path="/" element={user? <Navigate to={'/email'}/>:<Login/>} />
     
      <Route path="/email" element={user? <EmailWithNavbar user={user} />:<Navigate to={'/'}/>} />
      </Routes>
      </>
  )
}

export default App
