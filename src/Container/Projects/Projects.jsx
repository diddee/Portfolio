import React from 'react'
import NewImg from "../../Assets/img.jpg"
import Stylerapy from "../../Assets/stylerapy.PNG"
import Food from "../../Assets/Food.PNG"
import Lms from "../../Assets/lms.PNG"
import Todo from "../../Assets/Todo.PNG"
import Quiz from "../../Assets/Quiz-Snip2.PNG"
import Html from "../../Assets/html-removebg-preview.png"
import Css from "../../Assets/css-removebg-preview.png"
import Js from "../../Assets/jsx.png"
import ReactJs from "../../Assets/react2-removebg-preview.png"
import Github from "../../Assets/git-removebg-preview.png"
import { FaGithub} from "react-icons/fa"
import "./Projects.css"

const Projects = () => {
  return (
    <div className='Project'>
        <div className='Intro'>
            <h2>My Projects</h2>
            <p>Check out some of my projects...</p>

        </div>
        <div className='Projects'>

            <div className="Single-Project" id="left">
                <img src={Stylerapy} alt="portImage" />
                <div className="Overlay"></div>
                <div className="Desc">
                    <h3>E-Commerce Website</h3>
                    <div className="Code">
                        <a href="https://github.com/diddee/Stylerapy"> <FaGithub className="Icon" /> </a>

                    </div>
                </div>
            </div>

            <div className="Single-Project" id="right">
                <img src={Quiz} alt="portImage" />
                <div className="Overlay"></div>
                <div className="Desc">
                    <h3>Quiz-App</h3>
                    <div className="Code">
                        <a href="https://github.com/diddee/Quiz-App"> <FaGithub className="Icon" /> </a>

                    </div>
                </div>
            </div>

            <div className="Single-Project" id="left">
                <img src={Todo} alt="portImage" />
                <div className="Overlay"></div>
                <div className="Desc">
                    <h3>To-do List</h3>
                    <div className="Code">
                        <a href="https://github.com/diddee/Task-TO-Do"> <FaGithub className="Icon" /> </a>

                    </div>
                </div>
            </div>

            <div className="Single-Project" id="right">
                <img src={Food} alt="portImage" />
                <div className="Overlay"></div>
                <div className="Desc">
                    <h3>Food Recipe App</h3>
                    <div className="Code">
                        <a href="https://github.com/diddee/Food-Recipe"> <FaGithub className="Icon" /> </a>

                    </div>
                </div>
            </div>

            <div className="Single-Project" id="left">
                <img src={Lms} alt="portImage" />
                <div className="Overlay"></div>
                <div className="Desc">
                    <h3> Learning Management Website</h3>
                    <div className="Code">
                        <a href="https://github.com/diddee/lms"> <FaGithub className="Icon" /> </a>

                    </div>
                </div>
            </div>
            
        </div>

        <div className="Skills">
            <h2>SKILLS</h2>
            <div className="Stack">
                <div className="Language">
                    <img src={Html} alt="" />
                    <h3>HTML</h3>
                </div>

                <div className="Language">
                    <img src={Css} alt="" />
                    <h3>CSS</h3>
                </div>

                <div className="Language">
                    <img src={Js} alt="" />
                    <h3>JAVASCRIPT</h3>
                </div>

                <div className="Language">
                    <img src={ReactJs} alt="" />
                    <h3>REACT</h3>
                </div>

                <div className="Language">
                    <img src={Github} alt="" />
                    <h3>GIT & GITHUB</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
