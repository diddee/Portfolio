import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css';
import About from './Components/AboutPage/AboutPage'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/About" element= { <About/> } />
        <Route path="/Services" element= { <Services/> } />
        <Route path="/Contact" element= { <Contact/> } />

      </Routes>
      
    </div>
  );
}

export default App;
