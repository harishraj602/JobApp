import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/ApiUrl'
import { toast } from 'react-toastify'

const Login = () => {
 
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

 const handlesubmit=async()=>{
          //  let existdata=null
          //  console.log("inside submit")

           if(username&&password)
           { 
            //  console.log("before username api" ,username)
            //  console.log("before username api" ,password)
            //  const response=await api.get(`/user/loginAuth/${username}/${password}`)
            //  const token=response.data.token;
            //  console.log("after username api",existdata)

               
                // if(existdata.data.includes("Invalid")){
                //     toast.error("incorrect password")
                //     return
                // }
                // else if(existdata.data.includes("successful"))
                // {
                //     sessionStorage.setItem("username",username)
                //     toast.success("logged in successfull")
                //     navigate("/home")
                // }
                // else if(existdata.data.includes("username")){
                //     toast.error("User not found")
                //     return
                // }
                try {
                  const response=await api.post(`/user/loginAuth/${username}/${password}`)
                  const token = response.data;
                  console.log("response",response)
                  console.log("token",token)
                  if(token.toLowerCase().includes("invalid"))
                    {
                      toast.error('Invalid credentials');
                    }
                  else if (token) {
                      localStorage.setItem('token', token); // Store token in localStorage
                      toast.success('Logged in successfully');
                      navigate('/home');
                  } 
              } catch (error) {
                  console.error('Login error:', error);
                  toast.error('An error occurred during login. Please try again.');
              }
           }
           else{
            toast.error("Please fill all the fields")
            return
           }
 }


  return (
    <div className='login-container'>
      <div className='inputfields'>
        <input type='text' placeholder='Username or Email' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>handlesubmit()} >Continue</button>
      </div>
      <div className='signup'>
        <p>Don't have an account?</p>
        <Link className='link' to={'/signupAuth'}>
           Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login