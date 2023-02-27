import React from 'react';
import './resume.css';

const Resume = () => {
    return (
        <div>
            <div className='resumeHello'>
            <h2>Hi, I'm Carmine</h2>
            </div>
            <div className='aboutContainer'>
                <div className='aboutFirstBlock'>
                    <p>Hi, I am a Fullstack Software Engineer with a passion for collaborating and creating user-centric applications. In between coding, I work as a fashion designer. I’m a designer with 10 years of experience, focused on mass market womenswear and shoe design.</p>
                </div>
                <div className='aboutSecondBlock'>
                    <p>With my experience as a seasoned designer, I bring an eye for design aesthetics, attention to detail and communication skills to share ideas with people from a wide range of backgrounds. The world of mass market has trained me to understand how people might think about and interact with products I put out into the world. I am good at de-escalating conflict situations and delivering empathy into the workplace.</p>
                </div>
                <div className='aboutThirdBlock'>
                    <p> I enjoy using my skills to build visually pleasing and user friendly web applications. I strive to work within a company that fosters learning and mentorship.</p>
                </div>
                <div className='resumeDiv'>
                <h2 className='resumeH2'>Resume</h2>
                </div>
                <div className='resumeImg'>
                    <img src="../public/Carmine Yijin Ro_Resume.jpg" width="80%"/>
                </div>
            </div>
        </div>
    );
};

export default Resume;