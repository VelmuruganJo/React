import './App.css'
import React from 'react'
import{BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Home from "./Pages/home";
import Education from "./Pages/education";
import Project from './Pages/project';
import Skills from './Pages/skills';
import Exprience from './Pages/exprience';
import About from './Pages/about';


function App() {

  return (
   <Router>
    <nav className='navbar'>
      <Link className='title'to='/home'>Home</Link>
      <Link className='title'to="/education">Education</Link> 
      <Link className='title'to="/project">Project</Link>
      <Link className='title' to="/skills">Skills</Link>
      <Link className='title'to="/exprience">Exprience</Link>
      <Link className='title' to="/about">About Me</Link>  
    </nav>
    <Routes>
      <Route path= "/home" element={<Home/>}/>
      <Route path= "/education" element={<Education/>}/>
      <Route path= "/project" element={<Project/>}/>
      <Route path= "/skills" element={<Skills/>}/>
      <Route path= "/exprience" element={<Exprience/>}/>
      <Route path= "/about" element={<About/>}/>
    </Routes>
   </Router>
  )
}

export default App
