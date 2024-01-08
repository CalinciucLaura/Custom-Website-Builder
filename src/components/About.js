import React from 'react';
import './About.css';

const About = ({ title, text, backgroundColor, textAlign, textColor, fontFamily }) => {    
    return (
        <div className='about' style={{backgroundColor: backgroundColor, textAlign: textAlign, color: textColor, fontFamily: fontFamily}}>
            <div className='about-text'>
            <h2>{title}</h2>
            <p>{text}</p>
            </div>
        </div>
    );
}

export default About;

