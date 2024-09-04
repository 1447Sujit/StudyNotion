
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import DashBoard from './Pages/DashBoard'
import Signup from './Pages/Signup'
import { useState } from 'react'
import Contact from './Pages/Contact'

function App() {
 
const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
   <div className='appContainer'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="contact" element={<Contact/>} />
       <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
       <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
       <Route path="dashboard" element={<DashBoard/>} />
      </Routes>

   </div>
  )
}

export default App
