import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Prizes from './Prizes'
import Desc from './Desc'
import ProblemStatements from './Problem'
import Timeline from './Timeline'
import FAQ from './FAQ'

const Hackathon = () => {
  return (
    <>
    <Banner />
    <ProblemStatements />
    <Desc />
    
    <Timeline />
    <Prizes />
    
    </>
  )
}

export default Hackathon