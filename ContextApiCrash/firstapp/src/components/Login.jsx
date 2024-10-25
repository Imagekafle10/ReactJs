import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    let[username,setUsername] = useState('')
    const [Password, setPassword] = useState('')
    
    const{setUser}  = useContext(UserContext)
    const handleSubmit = (e)=>{
      
    setUser({username,Password})
    }
  return (
    <>
   
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <form className="space-y-6" action="#" method="POST"> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              UserName
            </label>
            <div className="mt-2">
              <input
                // className='my-3'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder='Enter username'
                className="block text-center text-3xl w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                 value={Password}
                     onChange={(e)=>setPassword(e.target.value)}
                     placeholder='Enter Password'
                className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
      
      </div>
    </div>
  </>
  
  )
}

export default Login