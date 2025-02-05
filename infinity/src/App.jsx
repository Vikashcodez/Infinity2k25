import React from 'react'
import Home from './Pages/Home'
import Navbar from './Componets/Navbar'
import StarsCanvas from './Componets/StarsCanvas'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <StarsCanvas />
    </div>
  )
}

export default App