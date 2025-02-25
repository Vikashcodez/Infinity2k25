import React from 'react'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Navbar from './Componets/Navbar'
import OurTeam from './Pages/Team';
import Gallery from './Pages/GalleryPage'
import Workshop from './Pages/Live'
import StarsCanvas from './Componets/StarsCanvas'
import Sponsors from './Pages/Sponsors'
import Foot from './Componets/Footer'
import Hackathon from './Hackathon/Hackathon';
import Infyhunt from './Registration/Infyhunt'
import Techtac from './Registration/tech-tac-toe'
import Techthrone from './Registration/techno-throne'
import Techtriathon from './Registration/tech-triathone'
import Puzzlebit from './Registration/puzzle-bit'
import Dsa from './Registration/dsa-flag'
import Escape from './Registration/escape-room'
import Aipct from './Registration/aipictionary'
import Decrpt from './Registration/decrpt'
import Drama from './Registration/drama-tech'
import Login from './Admin/Login'
import Dasboard from './Admin/Dashboard'
import Table from './Admin/Table'
import UserTable from "./Admin/UserTable";

import UserDashboard from './Admin/UserDashboard'
import Hackdash from './Admin/Hackdashboard'
import Techteam from './Admin/Techteam'
import Hackteam from "./Admin/Hackteam"
import Hackreg from './Admin/Hackreg'
import Hack from './Registration/Hack'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/users/:event" element={<UserTable />} />
          <Route path="/user/:event" element={<Table />} />
          <Route path="/" element={<Home />} />
          <Route path="/hack" element={<Hackathon />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/our-team" element={<OurTeam />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/hackathon-users" element={<Hackdash />} />
          <Route path="/tech-dashboard" element={<Techteam />} />
          <Route path="/hack-dashboard" element={<Hackteam />} />
          <Route path="/hackathon-user" element={<Hackreg />} />

          <Route path="/infyhunt" element={<Infyhunt />} />
          <Route path="/tech-tac-toe" element={<Techtac />} />
          <Route path="/techno" element={<Techthrone />} />
          <Route path="/dsa-flag" element={<Dsa />} />
          <Route path="/escape-room" element={<Escape />} />
          <Route path="/ai-pict" element={<Aipct />} />
          <Route path="/tech-trai" element={<Techtriathon />} />
          <Route path="/Decrpt" element={<Decrpt />} />
          <Route path="/Drama-tech" element={<Drama />} />
          <Route path="/puzzlebit" element={<Puzzlebit />} />
          <Route path="/hack4good" element={<Hack />} />

          

        </Routes>
        <Foot />
      </Router>
      <StarsCanvas />
    </div>
  )
}

export default App