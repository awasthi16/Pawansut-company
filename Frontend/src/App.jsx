import React from 'react'
import { Nav } from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Register from './Register'
import Services from './Services'
import Login from './Login'
import { Footer } from './Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      
          <Route path="/" element={<Home/>}/> 
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/register" element={<Register/>}/>
        <Route path="/service" element={<Services/>}/> 
   <Route path="/login" element={<Login/>}/> 


      </Routes>
      
      </BrowserRouter>

<Footer/>

    </div>
  )
}

export default App