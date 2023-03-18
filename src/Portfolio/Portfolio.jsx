import React from 'react';
import "./portfolio.css"

const Portfolio = () => {
    return (
        <div className='portcontainer' id="portfolioJSX">
            <div className='h2Container'>
                <h2 className='portH2'>Projects</h2>
                <p>As a recent graduate of <span>The Fullstack Academy</span>, I had the opportunity to learn tech stacks and collaborate with other engineers to create innovative web applications.</p>
            </div>
            <div className='projectSection'>
                <h2>01</h2>
                <img src="/port01.jpg" width= "300px" />
                <div className='projectdecrb'>
                <p>Chef's Kiss is an Alexa integrated kitchen helper application that can help you decide what to make based on the ingredients in your fridge. It can also generate recipe based on the ingredient you have in your fridge!</p>
                <p>This is an application built utilizing firebase and AWS Lambda.</p>
                <a href='https://github.com/2208-Capstone-Team-1/Capstone-Kitchen-Prep' target="_blank">• Github</a>
                <a href='https://www.youtube.com/watch?v=FXS6niNCgXs&list=PLx0iOsdUOUmmlnNx8X695RdoNtroWPiju&index=4' target="_blank">• Walk-through</a>
                </div>
            </div>
            <div className='projectSection'>
                <h2>02</h2>
                <img src="/port02.jpg" width="300px" />
                <div className='projectdecrb'>
                <p>E-commerce website for Comic Enthusiast where users can register as members, browse and purchse comic books. This was a team project built in 2.5 weeks</p>
                <p>Checkout is powered by Stripe API</p>
                <a href='https://github.com/2208-GS-Team-1/Comic-Overflow' target="_blank">• Github</a>
                <a href='https://www.youtube.com/watch?v=rbbKldsF4Gw' target="_blank">• Walk-Through</a>
                </div>
            </div>
            <div className='projectSection'>
                <h2>03</h2>
                <img src="/port03.jpg" width="300px" />
                <div className='projectdecrb'>
                <p>Artificial Intelligent assistant to report weather, play your favorite songs and tell jokes to cheer you up.</p>
                <p>Powered by Tensorflow’s Voice Command for speech recognition & trained with Teachable Machine by Google</p>
                <a href='https://github.com/marchingkoala/Hello_Alfred' target="_blank">• Github</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;