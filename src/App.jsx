import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'


function App() {
 const [darkMode, setDarkMode] = useState(true)
 

  return (
    <>
      <Navbar mode={darkMode} />
      <Main mode={darkMode} />
    </>
  )
}

export default App
