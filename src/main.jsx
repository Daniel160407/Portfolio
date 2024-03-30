import React from 'react'
import About from './components/content/About.jsx'
import root from './scripts/root.js'
import Profile from './components/profile/Profile.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import MySkills from './components/content/Skills.jsx'
import Projects from './components/content/Projects.jsx'

root.render(
  <React.StrictMode>
    <Profile/>
    <div id='main' className='tab-content'>
      <About/>
      <Projects/>
      <MySkills/>
    </div>
    <div id='navbar'>
      <Navbar/>
    </div>
  </React.StrictMode>,
)
