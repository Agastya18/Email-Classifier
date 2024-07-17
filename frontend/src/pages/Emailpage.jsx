
import axios from 'axios'
import { useEffect, useState } from 'react'

const Emailpage = () => {
//  const [userInfo, setUserInfo] = useState()
  // useEffect(() => {
  //  const getUser= axios.get('http://localhost:8001/auth/login/success')
  //  console.log(getUser)
  // }, [])
 
  return (
    <div className="flex flex-col gap-4 p-4  ">
  
   
    <div className="flex justify-between">
      <p className="text-xs">15</p>
      <p className="text-xs">Classify</p>
    </div>
    <div className="w-full border rounded-md p-4">
      <p className="font-bold text-lg">Emily Davis</p>
      <p className="text-sm">Hi Emily, Thanks for your order. We are pleased to inform you that your order has been shipped. You can..</p>
      <div className="flex justify-end">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">Important</span>
      </div>
    </div>
    <div className="w-full border rounded-md p-4">
      <p className="font-bold text-lg">Marketing Team</p>
      <p className="text-sm">Dear valued customer, we are excited to introduce our latest product! Check it out on our website now.</p>
      <div className="flex justify-end">
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md">Marketing</span>
      </div>
    </div>
    <div className="w-full border rounded-md p-4">
      <p className="font-bold text-lg">Support Team</p>
      <p className="text-sm">Hello, we have important updates regarding your account security. Please review the changes in your dashboard.</p>
      <div className="flex justify-end">
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md">Spam</span>
      </div>
    </div>
  </div>
  )
}

export default Emailpage