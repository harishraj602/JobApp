import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import JobDesc from './components/JobDesc/JobDesc';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Postjob from './components/Postjob/Postjob';
import { useState } from 'react';
import Apply from './components/Apply/Apply';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './components/Auth/PrivateRoutes';



function App() {

  const username=localStorage.getItem('token')
  console.log("username",username)

  const [isopen,setIsopen]=useState(false)

  const handleOpen=()=>{
    setIsopen(!isopen)
    console.log("open",isopen)
  }
  

  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar handleOpen={handleOpen}/>
      <Routes>
          <Route path='/loginAuth' element={<Login/>}/>
          <Route path='/signupAuth' element={<Signup/>}/>
          <Route path="/home" element={<PrivateRoutes><Home isopen={isopen} handleOpen={handleOpen}/></PrivateRoutes>} />
          <Route path="/postjob" element={<PrivateRoutes><Postjob /></PrivateRoutes>} />
          <Route path="/job/:id" element={<PrivateRoutes><JobDesc /></PrivateRoutes>}/>
          <Route path="/apply" element={<PrivateRoutes><Apply /></PrivateRoutes>} /> 
      </Routes>
    </div>
  )


}

export default App;
