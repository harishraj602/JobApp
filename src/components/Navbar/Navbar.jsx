import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';




const Navbar = ({handleOpen}) => {
  const navigate=useNavigate()

  const hasloggedin=sessionStorage.getItem("username")

  const handleLogout=()=>{
    sessionStorage.clear()
    navigate("/loginAuth")
  }

  return (
    <div className='fix'>
    <div className='navbar'>
            <div className='logo'>
              {hasloggedin?
              
                <Link to={'/home'} className='link'>
                <h1>JOB APP</h1>
                </Link>:

                <Link to={'/loginAuth'} className='link'>
                <h1>JOB APP</h1>
                </Link> 
              }
            </div>

            {hasloggedin&&
            
              <div className='navbar-list'>
                  <div className="one">
                    <Link to={'/postjob'} className='link'>
                      Post A Job
                    </Link>
                  </div>

                  <div className='two' onClick={handleOpen}>
                      Find Jobs
                      <i className="fa fa-search"></i>
                  </div>
              </div>
            }

            <div className="auth">
              {hasloggedin?
              <button onClick={handleLogout}>Logout</button>:
              <button onClick={()=>navigate('/loginAuth')}>Login</button>}
            </div>
    </div>
    </div>
  )
}

export default Navbar