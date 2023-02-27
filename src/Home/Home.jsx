import React from 'react';

const Home = () => {
    return (
    <div className='homeBody'>
    {/* this is for the first line */}
      <div className='firstBlock'>
          <h2>Creative</h2>
          <div className='firstparagraph'>
            <p>Developer</p>
            <p>Designer</p>
            <p>Translator</p>
          </div>
      </div>
      <div className='secondBlock'>
        <h2>Developer</h2>
      </div>
      <div className='thirdBLock'>
        <p>I am a software developer with design background based in East Coast</p>
        <p>I bring an eye for design aesthetics, attention to detail</p>
        <p>and communication skills to share ideas with people from a wide range of backgrounds</p>
      </div>
      <div className='fourthBlock'>
          <h2>Designer</h2>
      </div>
    </div>
    );
};

export default Home;