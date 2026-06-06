import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Chef from './Components/Chef'
import Reservation from './Components/Reservation'
import Footer from './Components/Footer'
import Gallery from './Components/Atmospher'
import ReelsSection from './Components/Reels'


function App() {


  return (
    <div className="bg-[#111111] text-[#F5EFE6] selection:bg-[#B08B68]/40">
      <Navbar />
      <Hero />
      <About/>
      <ReelsSection/>
      <Gallery/>
      <Menu/>
      <Chef/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default App
