import React from 'react'

const Navbar = ({user}) => {
  console.log(user)

    const logout=()=>{
        window.open('https://email-classifier-lc2v.onrender.com/auth/logout','_self')
    }
    
  // console.log(user.user.profile.emails[0].value)
 // console.log(user.user)
  return (
    <>
  {/* component */}
  <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="text-indigo-500 md:order-1 flex items-center gap-4 ">
      
      <img src={ user?.user?.profile?.photos[0].value} alt="img" className=' rounded-full object-cover h-8 w-8' />

      
       <div>
       {
        user?.user?.profile?.emails[0].value
      }
       </div>
       
      </div>
     
      <div className="order-2 md:order-3">
       {
            user? <button onClick={logout} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-gray-50 rounded-xl flex items-center gap-2">
          {/* Heroicons - Login Solid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Logout</span>
        </button>:<button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          {/* Heroicons - Login Solid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Login</span>
        </button>
       }
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar