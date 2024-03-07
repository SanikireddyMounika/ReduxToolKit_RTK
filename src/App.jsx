import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import{Routes,Route} from "react-router-dom"

function App() {
  

  return (
    
    <>
    <div className='linktag'>
      <Link to ="/" >Home</Link>
      <Link to ="/contact" >contact</Link>
      <Link to ="/login" >Login</Link>

    </div>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element ={<Login/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
