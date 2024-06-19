import React, { useState } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'


const Card = ({jobdata,handleDelete}) => {
    const navigate=useNavigate();

    const[showmodal,setShowmodal]=useState(false)

    const handlechange=()=>{
        // console.log("id",jobId)
        // navigate(`/job/${jobId}`)
        setShowmodal(!showmodal);
    }

    const handleclick=()=>{
      navigate("/apply")
    }

  return (
    <div className={showmodal?"blur":'none'}>
     
     {!showmodal?(
        <div className="card-container" >

            <div className='card-header' onClick={()=>handlechange()}>
              <h1>{jobdata.jobName}</h1>
              <i  className="fa-solid fa-ellipsis-vertical verticon"></i>
            </div>

            <p>{jobdata.companyName}</p>
            <p>{jobdata.location}</p>
            <li>{jobdata.description.length>40?jobdata.description.substring(0,40)+"...":jobdata.description}</li>

            <div className='jobdetails'>
              <i className="fa-solid fa-phone"></i>
              <p>{jobdata.phoneNumber}</p>
            </div>

            <div className='card-button'>
               <button onClick={()=>handleDelete(jobdata.id)}>Delete</button>
            </div>

        </div>):null}

        {showmodal&&(
            <div className='fulldetails-container' >

                <div className='popup-header'>
                  <h1>{jobdata.jobName}</h1>
                  <div onClick={()=>handlechange()}>
                    <i className="fa-solid fa-x crossicon"></i>
                  </div>
                </div>

                <div className='comname jobdetails'>
                  <p className='label'>Company:</p>
                  <h2>{jobdata.companyName}</h2>
                </div>

                <div className='jobdetails'>
                  <p className='label'>{jobdata.location}</p>
                  <p className='labelans'>{609123}</p>
                </div>
                
                <div className="jobdetails">
                  <p className='label'>Job Mode:</p>
                  <p className='labelans'>{jobdata.jobType}</p>
                </div>
                
                <div className='jobdetails'>
                 <p className='label'>Technology:</p>
                 <p className='labelans'>{jobdata.technology}</p>
                </div>
               
                <div className='jobdetails'>
                  <p className='label'>Experience</p>
                  <p className='labelans'>{jobdata.experience}</p>
                </div>

                <div className='jobdetails'>
                  <p className='label'>Salary</p>
                  <p className='labelans'>{jobdata.salary}</p>
                </div>
                
                <div className='jobdetails description'>
                  <li>{jobdata.description}</li>
                </div>

                <div className='popup-button'>
                  <div className='contact'>
                    <i className="fa-solid fa-phone"></i>
                    <p>{jobdata.phoneNumber}</p>
                  </div>
                  <button onClick={()=>handleclick()}>Apply Now</button>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default Card