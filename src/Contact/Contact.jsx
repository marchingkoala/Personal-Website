import React from 'react';
import './contact.css';

const Contact = () => {

    const email = () => {
        window.open('mailto:yri.carmine@gmail.com?subject=Subject&body=Body%20goes%20here')
    }

    return (
        <div className='contact_container' id="contactJSX">
            <div className='contactH2'>
            <h2>Let's work together!</h2>
            </div>
            <div className='contactReach'>
                <h2>* Reach me *</h2>
            </div>
            <div className='contactSection'>
                <h2 onClick={email}>yri.carmine@gmail.com</h2>
            </div>
        </div>
    );
};

export default Contact;<h1>contact</h1>