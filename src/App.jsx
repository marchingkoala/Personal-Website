import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';
import Home from './Home/Home';

function App() {

  return (
    <div className="App">
      <div className='homeNav'>
        <nav>
          <Link to="/" >Carmine Yijin Ro</Link>
          <Link to="/portfolio" >Portfolio</Link>
          <Link to="/contact" >Contact</Link>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
