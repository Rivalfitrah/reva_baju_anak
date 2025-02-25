import React from 'react'
import '../app.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card/>

    </>
  )
}

export default HomePage