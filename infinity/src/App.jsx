import React from 'react'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Navbar from './Componets/Navbar'
import OurTeam from './Pages/Team';
import Gallery from './Pages/Gallery'
import Workshop from './Pages/Live'
import StarsCanvas from './Componets/StarsCanvas'
import Sponsors from './Pages/Sponsors'
import Foot from './Componets/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
           <Route path="/gallery" element={<Gallery />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/sponsors" element={<Sponsors />} /> 
          <Route path="/our-team" element={<OurTeam />} />
          
        </Routes>
        <Foot />
      </Router>
      <StarsCanvas />
    </div>
  )
}

export default App