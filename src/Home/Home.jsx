import React from 'react';
import { useEffect } from 'react';
import './home.css'
import gsap from 'gsap';
import { useRef } from 'react';

const Home = () => {
  let paragraph = useRef(null)

  useEffect(()=>{
        gsap.from(".hero", 1, {
        opacity: 0,
        ease: "power3.input",
        delay: 1,
        stagger:{
          amount: 0.5,
        }
      });
      gsap.to(".hero", 1, {
        opacity: 1,
        ease: "power3.input",
        delay: 1,
        stagger:{
          amount: 0.5,
        }
      });
  }, [])

    return (
    <div className='homeBody' id="homeJSX">
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
          <div className='hero-container'>
            <div ref={el => {paragraph = el}} className='hero'>
        <p>I am a software developer with design background based in East Coast. I bring an eye for design aesthetics, attention to detail and communication skills to share ideas with people from a wide range of backgrounds</p>
            </div>
          </div>
        </div>
      </div>
      <div className='fourthBlock'>
          <h2 className='designer_border'>Designer</h2>
          <h2 className='designer'>Designer</h2>
      </div>
      <div className='fifthBlock'>
        <div></div>
        <div className='fifthImg'>
          <img src='./javascript.png' width="70px" />
          <img src='./html.png' width="70px" />
          <img src='./css.png' width="70px" />
          <img src='./node.png' width="70px" />
          <img src='./react.png' width="70px" />
          <img src='./typescript.png' width="70px" />
          <img src='./redux.png' width="70px" />
          <img src='./awslambda.png' width="70px" />
          <img src='./postgresql.png' width="70px" />
          <img src='./git.png' width="70px" />
        </div>
      </div>
    </div>
    );
};

export default Home;