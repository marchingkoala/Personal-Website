import React from 'react';
import './home.css'

const Home = () => {
    return (
    <div className='homeBody'>
    {/* this is for the first line */}
      <div className='firstBlock'>
          <h2 className='creative'>Creative</h2>
          <div className='firstparagraph'>
            <p>Developer</p>
            <p>Designer</p>
            <p>Translator</p>
          </div>
      </div>
      <div className='secondBlock'>
        <h2 className='developer'>Developer</h2>
      </div>
      <div className='thirdBLock'>
        <h2 className='star'>*</h2>
        <div className='thirdBlockcontent'>
        <p>I am a software developer with design background based in East Coast. I bring an eye for design aesthetics, attention to detail and communication skills to share ideas with people from a wide range of backgrounds</p>
        </div>
      </div>
      <div className='fourthBlock'>
          <h2 className='designer_border'>Designer</h2>
          <h2 className='designer'>Designer</h2>
      </div>
    </div>
    );
};

export default Home;