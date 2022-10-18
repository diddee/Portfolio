import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='ContactPage'>
      <div className="Intro">
        <h1>Contact Me</h1>
        <p>Please fill in the form to reach out to me...</p>
      </div>
      <div className="Form">
        <form action="">
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Your Email'/>
          <input type="text" placeholder='Subject'/>
          <textarea name="" id="" cols="30" rows="7" placeholder='Your Message'></textarea>
          <button className='Btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Form
