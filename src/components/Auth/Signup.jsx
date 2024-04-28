import React, { useState } from 'react'
import './Signup.css'

import { Link, useNavigate } from 'react-router-dom'

import api from '../../api/ApiUrl'
import axios from 'axios'

const Signup = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setCpassword]=useState('')

    const navigate=useNavigate()

    const Handlesubmit=async()=>{
           
           let existdata=null
           console.log("inside submit")
           if(username)
           { 
            console.log("before username api" ,username)
             existdata=await api.get("/user/getbyusername/"+username)
             console.log("after username api",existdata)
           }
           
           if(existdata.data===null||existdata.data===undefined)
           {
            if(username&&password&&cpassword)
            {
                if(password!==cpassword)
                {
                    alert("Password doesn't match")
                    return;
                }
                else{
                    const userdata={
                        username:username,
                        password:password,
                    }
                    const postdata=await api.post('/user/saveuser',userdata)
                    alert("Account Created Successfully")
                    setUsername('')
                    setPassword('')
                    setCpassword('')
                    navigate("/loginAuth")
                }
            }
            else{
                alert("Please fill all the fields")
                return
            }
           }
           else{
            alert("Username already exist")
            return
           }
    }

    return(
    <div className='login-container'>
    <div className='inputfields'>
      <input type='text' placeholder='Username or Email' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <input type="password" placeholder='Confirm Password' value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
      <button onClick={()=>Handlesubmit()}>Continue</button>
    </div>
    <div className='signup'>
      <p>Already have an account?</p>
      <Link className='link' to={'/loginAuth'}>
         Log in
      </Link>
    </div>
  </div>
)
}

export default Signup