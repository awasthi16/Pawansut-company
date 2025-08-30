import React from 'react'
import { Nav } from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
// import Contact from './Contact'
import Register from './Register'
import Services from './Services'
import Login from './Login'

import EnquiryFrom from './EnquiryForm'
import EnquirySubmitPage from './EnquirySubmitPage'
import Contact1 from './Contact1'

import { Footer } from './Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      
          <Route path="/" element={<Home/>}/> 
     <Route path="/contact" element={<Contact1/>}/>
     <Route path="/register" element={<Register/>}/>
        <Route path="/service" element={<Services/>}/> 
   <Route path="/login" element={<Login/>}/> 
<Route path='/enquiryfrom' element={<EnquiryFrom/>}/>
<Route path='/EnquirySubmitPage' element={<EnquirySubmitPage/>}/>

      </Routes>
      
      </BrowserRouter>

<Footer/>

    </div>
  )
}

export default App