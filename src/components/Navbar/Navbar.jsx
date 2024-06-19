import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const Navbar = ({handleOpen}) => {
  const navigate=useNavigate()

  const hasloggedin=localStorage.getItem("token");
  console.log("has logged in",hasloggedin);

  const handleLogout=()=>{
    localStorage.clear()
    navigate("/loginAuth")
    toast.success("logged out successfully")
  }

  const [hamstate,setHamstate]=useState(false);
  const handleclick=()=>{
    setHamstate(!hamstate);
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

                    <div className='two' onClick={()=>
                    {
                      handleOpen();
                      navigate('/home');
                    }}>
                        Find Jobs
                        <i className="fa fa-search "></i>
                    </div>
                </div>
              }

              <div className={`auth ${hasloggedin?"no-log":""}`}>
                {hasloggedin?
                <button onClick={handleLogout}>Logout</button>:
                <button onClick={()=>navigate('/loginAuth')}>Login</button>}
              </div>

              <div className={`ham-icon ${hasloggedin?"":"no-log"}`}>
                 <i className="fas fa-bars fa-lg" onClick={handleclick}></i>
              </div>

            <div className={`ham-list ${hamstate?"":"ham-no"} `}>
                {hasloggedin&&hamstate&&
                
                <div className='navbar-list1'>
                    <div className="one">
                      <Link to={'/postjob'} className='link'>
                        Post A Job
                      </Link>
                      <i className="fas fa-times" onClick={handleclick}></i>

                    </div>

                    <div className='two' onClick={()=>
                    {
                      handleOpen();
                      navigate('/home');
                    }}>
                        Find Jobs
                        <i className="fa fa-search "></i>
                    </div>
                </div>
                }
                {
                  hamstate&& 
                  <div className="auth1">
                    {hasloggedin?
                    <button onClick={handleLogout}>Logout</button>:
                    <button onClick={()=>navigate('/loginAuth')}>Login</button>}
                  </div>
                } 
          </div>
      </div>
    </div>
  )
}

export default Navbar