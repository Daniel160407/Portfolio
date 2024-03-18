import React from 'react'
import Title from './components/Title.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import root from './root.js'
import Buttons from './components/Buttons.jsx'
import Contact from './components/Contact.jsx'


root.render(
  <React.StrictMode>
    <Title />
    <Skills/>
    <About/>
    <Buttons/>
    <Contact/>
  </React.StrictMode>,
)
