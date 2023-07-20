import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from '../about/About'
import ContactUs from '../contactUs/ContactUs'
import LogIn from '../logIn/LogIn'
import Home from '../home/Home';
// import Navbar from '../../component/navigation/Navbar';
import Sidebar from '../../component/navigation/Sidebar';


function Routing() {
  return (
    <BrowserRouter>
      <div className='routesWrapper'>
        {/* <Navbar/> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default Routing