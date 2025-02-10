import React from 'react'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Navbar from './Componets/Navbar'
import OurTeam from './Pages/OurTeam';
import StarsCanvas from './Componets/StarsCanvas'
import Form from './Pages/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/sponsors" element={<Sponsors />} /> */}
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/form" element={<Form />}/>
        </Routes>
      </Router>
      <StarsCanvas />
    </div>
  )
}

export default App