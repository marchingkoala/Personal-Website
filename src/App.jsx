import './App.css'
import { Route, Routes } from "react-router-dom";
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';
import Home from './Home/Home';
import Resume from './Resume/Resume.jsx'
import {Link} from 'react-scroll';
import Skill from './Skill/Skill';

function App() {

  return (
    <div className="App">
      <div className='homeNav'>
        <nav>
          <Link to="homeJSX" spy={true} smooth={true} duration={500}>Carmine Yijin  Ro</Link>
          <Link to="portfolioJSX" spy={true} smooth={true} duration={500}>Projects</Link>
          <Link to="skillJSX" spy={true} smooth={true} duration={500}>Design</Link>
          <Link to="contactJSX" spy={true} smooth={true} duration={500}>Contact</Link>
        </nav>
      </div>
      <div className='component_divider'>
        <Home />
      </div>
      <div className='component_divider'>
        <Portfolio />
      </div>
      <div className='component_divider'>
        <Skill />
      </div>
      <div className='component_divider'>
        <Contact />
      </div>
    </div>
  )
}

export default App
