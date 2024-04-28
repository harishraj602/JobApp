import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/ApiUrl'

const Login = () => {
 
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

 const handlesubmit=async()=>{
           let existdata=null
           console.log("inside submit")

           if(username&&password)
           { 
             console.log("before username api" ,username)
             console.log("before username api" ,password)
             existdata=await api.get(`/user/getbynamepass/${username}/${password}`)
             console.log("after username api",existdata)

               
                 if(existdata.data.includes("unmatched")){
                    alert("incorrect password")
                    return
                }
                else if(existdata.data.includes("matched"))
                {
                    sessionStorage.setItem("username",username)
                    alert("logged in successfull")
                    navigate("/home")
                }
                else if(existdata.data.includes("no")){
                    alert("User not found")
                    return
                }
           }
           else{
            alert("Please fill all the fields")
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