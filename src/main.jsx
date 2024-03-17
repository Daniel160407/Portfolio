import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Title from './components/Title.jsx'
import Skills from './components/Skills.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <Skills/>
  </React.StrictMode>,
)
