import React, { useState } from 'react'
import './Apply.css'
import api from '../../api/ApiUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Apply = () => {

    const navigate=useNavigate();

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[resume,setResume]=useState("");
    const[qualification,setQualification]=useState("");
    const[experience,setExperience]=useState("");
    const[ctc,setCtc]=useState("");


    const setinputempty=()=>{
        setFirstname("");
        setLastname("");
        setEmail("");
        setAddress("");
        setResume("")
        setQualification("")
        setExperience("")
        setCtc("")
    }

    const handlesubmit=async(e)=>{
           e.preventDefault();
           if(firstname&&lastname&&email&&address&&resume&&qualification&&experience&&ctc){
             const applydata={
                 firstname,
                 lastname,
                 email,
                 address,
                 resume,
                 qualification,
                 experience,
                 ctc
             }
              
             const postdata=await api.post("/apply/applying",applydata);
             console.log("postdata",postdata);
             toast.success("job applied successfully");
             setinputempty();

           }
           else{
            toast.error("please fill all the fields")
           }
    }


  return (
    <div className='apply-container'>
      <div className='form-container'>
            <div>
                <input type="text" value={firstname} placeholder='firstname' onChange={(e)=>setFirstname(e.target.value)} />
                <input type="text"value={lastname} placeholder='lastname' onChange={(e)=>setLastname(e.target.value)} />
            </div>
            <div>
                <input type="text" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" value={address} placeholder='address' onChange={(e)=>setAddress(e.target.value)} />
            </div>
            <div>
                <input type="text" value={resume} placeholder='resume drive link' onChange={(e)=>setResume(e.target.value)} />
                <input type="text" value={qualification} placeholder='qualification' onChange={(e)=>setQualification(e.target.value)} />
            </div>
            <div>
                <input type="text" value={experience} placeholder='experience' onChange={(e)=>setExperience(e.target.value)} />
                <input type="text" value={ctc} placeholder='expected ctc' onChange={(e)=>setCtc(e.target.value)} />
            </div>
            <div className='auth apl-btn'>
               <button onClick={(e)=>handlesubmit(e)}>Apply</button>
               <button onClick={()=>navigate("/home")}>Cancel</button>
            </div>        
       </div>
      

    </div>
  )
}

export default Apply