import React from 'react';
import './skill.css';

const Skill = () => {
    return (
        <div className='skill_container' id="skillJSX">
            <div className='skill_leftblock'>
                <div className='designDescrb'>
                    <h2>Fashion Design</h2>
                    <p>Before my transition to software engineering, I was a fashion designer. I've worked with mass market companies like <span className='target'>Target</span>, <span className='amazon'>Amazon</span> and <span className='walmart'>Walmart</span></p>
                    <p>I'm proficient in <span className='adobe'>Adobe Creative Cloud</span> applications and also have experience in video editing</p>
                </div>
                <div className='skillIcons'>
                    <img src="./photoshop.png" width="100px" height="auto" alt="photoshop_icon" />
                    <img src="./illustrator.png" width="100px" height="auto" alt="illustrator_icon"/>
                    <img src="./premiere.png" width="100px" height="auto" alt="premiere_icon"/>
                    <img src="./indedign.png" width="100px" height="auto" alt="inDesign_icon"/>
                </div>
            </div>
            <div className='skill_rightblock'>
                <div className='fashion_photos'>
                    <img src='./fashion_photo-01.jpg' width="250px" height="auto" alt="editorial photo from victoria beckahm x target collection"/>
                    <img src='./fashion_photo-02.jpg' width="250px" height="auto" alt="fashion editorial photo of a woman and a girl"/>
                    <img src='./fashion_photo-03.jpg' width="250px" height="auto" alt="fashion editorial photo of two women"/>
                    <img src='./fashion_photo-04.jpg' width="250px" height="auto" alt="ad photo of amazon brand lark and ro"/>
                    <img src='./fashion_photo-05.jpg' width="250px" height="auto" alt="fashion editorial photo of a amazon brand lark and ro"/>
                    <img src='./fashion_photo-06.jpg' width="250px" height="auto" alt="fashion editorial photo of a woman wearing a striped dress"/>
                </div>
            </div>
        </div>
    );
};

export default Skill;