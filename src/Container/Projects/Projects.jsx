import React from 'react'
import NewImg from "../../Assets/img.jpg"
import "./Projects.css"

const Projects = () => {
  return (
    <div className='Project'>
        <div className='Projects'>

            <div className="Single-Project" id="left">
                <img src={NewImg} alt="portImage" />
                <div className="Overlay"></div>
            </div>

            <div className="Single-Project" id="right">
                <img src={NewImg} alt="portImage" />
                <div className="Overlay"></div>
            </div>

            <div className="Single-Project" id="left">
                <img src={NewImg} alt="portImage" />
                <div className="Overlay"></div>
            </div>

            <div className="Single-Project" id="right">
                <img src={NewImg} alt="portImage" />
                <div className="Overlay"></div>
            </div>

            <div className="Single-Project" id="left">
                <img src={NewImg} alt="portImage" />
                <div className="Overlay"></div>
            </div>
            
        </div>

        <div className="Skills">
            <h2>SKILLS</h2>
            <div className="Stack">
                <div className="Language">
                    <img src="" alt="" />
                    <h3>HTML</h3>
                </div>

                <div className="Language">
                    <img src="" alt="" />
                    <h3>CSS</h3>
                </div>

                <div className="Language">
                    <img src="" alt="" />
                    <h3>JAVASCRIPT</h3>
                </div>

                <div className="Language">
                    <img src="" alt="" />
                    <h3>REACT JS.</h3>
                </div>

                <div className="Language">
                    <img src="" alt="" />
                    <h3>GIT & GITHUB</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
