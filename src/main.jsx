import React from 'react'
import './index.css'
import Title from './components/Title.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import root from './root.js'
import Buttons from './components/Buttons.jsx'


root.render(
  <React.StrictMode>
    <Title />
    <Skills/>
    <About/>
    <Buttons/>
  </React.StrictMode>,
)
