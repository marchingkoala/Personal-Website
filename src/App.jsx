import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';
import Home from './Home/Home';
import Resume from './Resume/Resume.jsx'

function App() {

  return (
    <div className="App">
      <div className='homeNav'>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/resume">Carmine Yijin Ro</Link>
          <Link to="/portfolio" >Portfolio</Link>
          <Link to="/contact" >Contact</Link>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
