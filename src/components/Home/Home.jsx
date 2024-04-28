import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from '../Card/Card'
import api from '../../api/ApiUrl'


const Home = ({isopen,handleOpen}) => {

  const [datajob,setDatajob]=useState([]);

  const[jobName,setJobName]=useState('');
  const[companyName,setCompanyname]=useState('');
  const[location,setLocation]=useState('');
  const[jobType,setJobType]=useState('');
  const[technology,setTechnology]=useState('');

  const defaultvalue=()=>{
      setJobName('');
      setCompanyname('');
      setLocation('');
      setJobType('');
      setTechnology('')
  }

 
  const loadjobdata=async()=>{
     const fetchdata=await api.get("job/all");
     if(jobName==''&&companyName==''&&location==''&&jobType==''&&technology=='')
     { 
       console.log('herer')
       setDatajob(fetchdata.data)
       return;
     }
     const filter=fetchdata.data.filter((data)=>(
       jobName&&data.jobName.toLowerCase().includes(jobName.toLowerCase())||
       companyName&&data.companyName.toLowerCase().includes(companyName.toLowerCase())||
       location&&data.location.toLowerCase().includes(location.toLowerCase())||
       jobType&&data.jobType.toLowerCase().includes(jobType.toLowerCase())||
       technology&&data.technology.toLowerCase().includes(technology.toLowerCase())
      ))
      console.log("filtered data",filter)
     setDatajob(filter)
     defaultvalue();
  }

  const handleDelete=async(jobId)=>{
    alert("Are you sure? you want to delete")
    await api.delete("job/delete/"+jobId) 
    loadjobdata();
  }

  const handleSubmit=async()=>{
    console.log("getting called")
    loadjobdata();
  }

  useEffect(()=>{
    loadjobdata();
  },[])


 


  return (
    <div className='card'>
      {isopen&&
      <div className='search'>
        <div className='search-inputs'>
          <input type="text" name='jobName' placeholder='Job' value={jobName} onChange={(e)=>setJobName(e.target.value)}/>
          <input type="text" name='companyName' placeholder='Company' value={companyName} onChange={(e)=>setCompanyname(e.target.value)} />
          <input type="text" name='location' placeholder='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
          <input type="text" name='jobType' placeholder='jobType' value={jobType} onChange={(e)=>setJobType(e.target.value)}/>
          <input type="text" name='technology' placeholder='technology' value={technology} onChange={(e)=>setTechnology(e.target.value)}/>
          <button onClick={()=>{handleSubmit();handleOpen()}}>Search</button>
        </div>
      </div>}

      {
      !isopen&&
      datajob.map((jobdata,index)=>(
           <Card jobdata={jobdata} key={index} handleDelete={handleDelete}/>
      ))
      }
     
    
    </div>
  )
}

export default Home