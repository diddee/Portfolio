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
                    <a href="https://drive.google.com/file/d/18I8lXOvZ0bfLS9PY6YBdf6h2v7LC0pgO/view?usp=share_link" className='Btn-light'>Download CV</a>
                </div>
            
            </div>


        </div>
    </div>
  )
}

export default LandingPage
