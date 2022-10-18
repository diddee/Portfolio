import React from 'react'
import img from "../../Assets/img2.jpg"
import "./LandingPage.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <div className='Home-Section'>

            <div className='Img'>
                <img className='Img' src={img} alt="background" />
            </div>

            <div className='Content'>

                <p>Hi, I'm Deola...</p>
                <h1>I BUILD & DESIGN WEB INTERFACES.</h1>
                <h2>Let's Build Something Amazing Together.</h2>

                <div className='Button'>
                    <Link to="/Contact" className='Btn'>Hire Me</Link>
                    <button className='Btn-light'>Download CV</button>
                </div>
            
            </div>


        </div>
    </div>
  )
}

export default LandingPage
