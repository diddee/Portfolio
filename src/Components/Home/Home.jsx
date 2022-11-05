import React from 'react'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import About from '../../Container/About/About'
import Projects from '../../Container/Projects/Projects'
import Form from '../../Container/Form/Form'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div className='Home'>
        <Nav />
        <LandingPage />
        <About />
        <Projects />
        <Form />
        <Footer />


        
    </div>
  )
}

export default Home
