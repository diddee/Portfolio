import React from 'react'
import { Link } from "react-router-dom"
import MyPic from "../../Assets/picture4.png"
import "./About.css"

const About = () => {
  return (
    <div className='About'>
      <div className='About-Page'>
        <div className='AboutMe'>
          <h1>Olawale Adeola</h1>
          <h3>FrontEnd Developer</h3>
          <p>
           I am a graduate with a degree in  Entrepreneurial Studies. Building and 
           designing human centered experiences is what I do. I began my tech journey by applying to boot camps 
           where I have learnt and mastered Javascript and programming libraries like React. 
           I can also use HTML and CSS to an excellent degree of expertise. In engaging me, you
           will find a resourceful, hardworking and innovative young developer with a good nose
           for evolving tech trends. Beyond my technical skillsets, I possess the discipline 
           required to perform in a multi-dimensional, fast-paced work environment. In addition, 
           I am great at communicating and capable of working independently with little or no guidance.
          </p>
          <Link to="/Contact" className='Btn'>Contact Me</Link>
      
        </div>
        <div className='Image'>
          <img src={MyPic} alt="ddidee" />
        </div>
      </div>
    </div>
  )
}

export default About
