import React from 'react'
import Hero from '../Componets/Hero'
import About from '../Componets/About'
import Timer from '../Componets/Timer'
import Tim from '../Componets/Timeline'
import Faclity from '../Componets/Faclity'
import Gal from '../Componets/Gallery'


const Home = () => {
  return (
    <div className="space-y-0">
        <Hero  className="mb-0" />
        <About className="mt-0"  />
        <Timer />
        <Tim />
        <Faclity />
        <Gal />
       
    </div>
  )
}

export default Home