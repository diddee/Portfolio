import React from 'react'
import { Link } from "react-router-dom"
import MyPic from "../../Assets/my pic.png"
import "./About.css"

const About = () => {
  return (
    <div className='About'>
      <div className='About-Page'>
        <div className='AboutMe'>
          <h1>Olawale Adeola</h1>
          <h3>FrontEnd Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium vel illum tenetur harum dolores amet ad quae
            cupiditate corporis, delectus impedit deserunt natus eligendi porro!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolore vel aliquid, soluta a velit exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam odit ab unde necessitatibus nostrum voluptate est eveniet quaerat!
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
