import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import About from '../about/About'
import ContactUs from '../contactUs/ContactUs'
import Home from '../home/Home';
import Sidebar from '../../component/navigation/Sidebar';
import Project from '../project/Project'
import DetailOfProject from '../project/DetailOfProject';
import EditProject from '../project/EditProject';
import CreateProject from '../project/CreateProject';

function RoutingPostLogin() {
  return (
    <div className='routesWrapper'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/editProject/:projectId" element={<EditProject />} />
        <Route path="/detailOfProject/:projectId" element={<DetailOfProject />} />
      </Routes>
    </div>

  )
}

export default RoutingPostLogin