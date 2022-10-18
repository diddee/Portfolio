import React from 'react'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import About from '../../Container/About/About'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div className='Home'>
        <Nav />
        <LandingPage />
        <About />
        <Footer />


        
    </div>
  )
}

export default Home
