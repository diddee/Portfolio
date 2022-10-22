import React from 'react'
import Footer from '../Footer/Footer'
import Projects from '../../Container/Projects/Projects'
import Nav from "../Nav/Nav"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <Nav />
        <Projects />
        <Footer />
      
    </div>
  )
}

export default Portfolio
