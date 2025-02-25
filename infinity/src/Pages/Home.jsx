import React from 'react'
import Hero from '../Componets/Hero'
import About from '../Componets/About'
import Timer from '../Componets/Timer'
import Tim from '../Componets/Timeline'
import Faclity from '../Componets/Faclity'
import Gal from '../Componets/Gallery'
import ContactPage from '../Componets/Contact'


const Home = () => {
  return (
    <>
        <Hero  className="mb-0" />
        <About className="mt-0"  />
        <Timer />
        <Tim />
        <Faclity />
        <Gal />
        <ContactPage />
       
    </>
  )
}

export default Home