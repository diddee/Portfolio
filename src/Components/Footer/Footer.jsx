import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter, } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='left'>
        <div className='Location'>
            <h4>
              <FaHome className='Icon'/>
            </h4>
            <p>Lagos, Nigeria.</p>
        </div>
        <div className='Location'>
            <h4>
              <FaMailBulk className='Icon'/>
            </h4>
            <p>Olawaleadeola20@gmail.com</p>
        </div>
      </div>
      <div className='Right'>
        <p>You can reach me on all social media platforms...</p>
        <div>
          <a href="">
            <FaFacebook className='Icon'/>
          </a>
          <a href="https://twitter.com/diddee">
            <FaTwitter className='Icon'/>
          </a>
          <a href="">
            <FaLinkedin className='Icon'/>
          </a>
          <a href="https://github.com/ddidee">
            <FaGithub className='Icon'/>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer
