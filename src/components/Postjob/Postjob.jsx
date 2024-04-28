import React, { useState } from 'react'
import './Postjob.css'
import { useNavigate } from 'react-router-dom'
import api from '../../api/ApiUrl'


const options = {
    type: ['Online', 'Offline'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
    salary: ['Rs. 0-300000', 'Rs. 300000-500000', 'Rs. 500000-800000', 'Rs. 800000-1000000', 'Rs. 1000000-1500000', 'Rs. 1500000-2000000', 'Rs. 2000000 or more']
}

const modalobj= {
    "jobName":'',
    "companyName":'',
    "jobType":'',
    "experience":'',
    "technology":'',
    "salary":'',
    "location":'',
    "phoneNumber":'',
    "description":''
}


const Postjob = () => {

    const [jobdata,setJobdata]=useState(modalobj)
  
    const navigate=useNavigate()

    const handleChange=(e)=>{
            setJobdata({ ...jobdata,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("jobdata",jobdata)
        if(jobdata.jobName&&jobdata.companyName&&jobdata.description&&jobdata.experience&&jobdata.location&&
            jobdata.salary&&jobdata.phoneNumber&&jobdata.technology&&jobdata.jobType)
        {
             const responsedata= await api.post("job/savejob",jobdata)
             if(responsedata.data.includes("saved"))
             alert("job saved successfully")
             setJobdata(modalobj)
             navigate("/home")
        }
        else{
            alert("Please fill all the fields")
            return
        }
    }



    return(
       <div className='post-container'>
         <div className='crossicon'>
           <i onClick={()=>navigate('/home')} className="fa-solid fa-x "></i>
         </div>

         <div className='jobcol'>
            <div className='inputfields'>
                <label htmlFor="">Job Name</label>
                <input name='jobName' value={jobdata.jobName} onChange={(e)=>handleChange(e)} type="text" />
            </div>

            <div className='inputfields'>
                <label htmlFor="">Company Name</label>
                <input name='companyName' value={jobdata.companyName} onChange={handleChange} type="text" />
            </div>
         </div>

         <div className='jobcol'>
            <div className='inputfields'>
                <label htmlFor="">Job Type</label>
                <select name='jobType' className='options' value={jobdata.jobType} onChange={handleChange}>
                    <option  className='options' value="select">Select</option>
                    {options.type.map((option,index)=>(
                        <option key={index} className='options' value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className='inputfields'>
                <label htmlFor="">Experience</label>
                <select name='experience' className='options' value={jobdata.experience} onChange={handleChange}>
                    <option  className='options' value="select">Select</option>
                    {options.experience.map((option,index)=>(
                        <option key={index} className='options' value={option}>{option}</option>
                    ))}
                </select>
            </div>
         </div> 

          <div className='jobcol'>
            <div className='inputfields'>
                <label htmlFor="">Technology</label>
                <select  name='technology' className='options' value={jobdata.technology} onChange={handleChange}>
                 <option className='options' value="select">Select</option>
                    {options.technology.map((option,index)=>(
                        <option key={index} className='options' value={option}>{option}</option>
                    ))}
                </select>
               
            </div>

            <div className='inputfields'>
                <label htmlFor="">Salary</label>
                <select name='salary' className='options' value={jobdata.salary} onChange={handleChange}>
                   <option  className='options' value="select">Select</option>
                    {options.salary.map((option,index)=>(                 
                        <option key={index} className='options' value={option}>{option}</option>
                    ))}
                </select>
            </div>
         </div>

         <div className='jobcol'>
            <div className='inputfields'>
                <label htmlFor="">Location</label>
                <input name='location' type="text" value={jobdata.location} onChange={handleChange} />
            </div>

            <div className='inputfields'>
                <label htmlFor="">Phone number</label>
                <input name='phoneNumber' type="text" value={jobdata.phoneNumber} onChange={handleChange}/>
            </div>
         </div>

         <div className='inputfields'>
            <label htmlFor="">Description</label>
            <textarea name='description' value={jobdata.description} onChange={handleChange} className='inputtextarea' type="text" rows={4} cols={50}/>
         </div>

         <div className='postbtn'>
            <button onClick={handleSubmit}>Post</button>
         </div>

       </div> 
    )
}

export default Postjob