import axios from 'axios'
import React, {useEffect, useState } from 'react'

function Login() {
  const url='http://localhost:3001';
const [name,setname]=useState({
  username:'',
  password:''
})

const changehandler=(e)=>{
  const {name, value}=e.target
  setname((prev)=>({...prev,[name]:value})
  )
  
}
useEffect(() => {
  
}, []);

const submitHandler = async(e) => { 
  e.preventDefault();
const res=await axios.post(`${url}/mike`, name)
console.log(res)

  
 }
  
  return (
    <div><>
    {/* component */}
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          
          className="object-cover w-full h-full"
          alt='mike'
        />
      </div>
      {/* Right: Login Form */}

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={submitHandler}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
            value={name.username}
            onChange={changehandler}
              type="text"
              id="username"
              name='username'
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
            value={name.password}
            onChange={changehandler}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"

            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <a href="google" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        {/* Sign up  Link */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="google.com" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default Login