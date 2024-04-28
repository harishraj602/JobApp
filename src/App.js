import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import JobDesc from './components/JobDesc/JobDesc';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Postjob from './components/Postjob/Postjob';
import { useState } from 'react';


function App() {

  const username=sessionStorage.getItem('username')
  console.log("username",username)

  const [isopen,setIsopen]=useState(false)

  const handleOpen=()=>{
    setIsopen(!isopen)
    console.log("open",isopen)
  }
  

  return (
    <div>
      <Navbar handleOpen={handleOpen}/>
      <Routes>
      {username!==''&& <Route path='/home' element={<Home isopen={isopen} handleOpen={handleOpen}/>}/>}
      <Route path='/loginAuth' element={<Login/>}/>
      <Route path='/signupAuth' element={<Signup/>}/>
      {username&& <Route path='/postjob' element={<Postjob/>}/>}
      {username&& <Route path='/job/:id' element={<JobDesc/>}/>}
      </Routes>
    </div>
  )


}

export default App;
