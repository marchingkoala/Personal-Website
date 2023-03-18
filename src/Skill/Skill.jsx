import React from 'react';
import './skill.css';

const Skill = () => {
    return (
        <div className='skill_container' id="skillJSX">
            <div className='skill_leftblock'>
                <div className='designDescrb'>
                    <h2>Fashion Design</h2>
                    <p>Before my transition to software engineering, I was a fashion designer. I've worked with mass market companies like<span className='target'>Target</span>,<span className='amazon'>Amazon</span> and <span className='walmart'>Walmart</span></p>
                    <p>I'm proficient in <b>Adobe Creative Cloud</b> applications and also have some experience in video editing</p>
                </div>
                <div className='skillIcons'>
                    <img src="./photoshop.png" width="100px" />
                    <img src="./illustrator.png" width="100px" />
                    <img src="./premiere.png" width="100px" />
                    <img src="./indedign.png" width="100px" />
                </div>
            </div>
            <div className='skill_rightblock'>
                <div className='fashion_photos'>
                    <img src='./fashion_photo-01.jpg' width="250px" />
                    <img src='./fashion_photo-02.jpg' width="250px"/>
                    <img src='./fashion_photo-03.jpg' width="250px"/>
                    <img src='./fashion_photo-04.jpg' width="250px"/>
                    <img src='./fashion_photo-05.jpg' width="250px"/>
                    <img src='./fashion_photo-06.jpg' width="250px"/>
                </div>
            </div>
        </div>
    );
};

export default Skill;