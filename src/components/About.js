import React from 'react';
import './About.css';

const About = ({ title, text, textAlign, textColor, fontFamily, style}) => {    
    return (
        <div className='about' style={{textAlign: textAlign, color: textColor, fontFamily: fontFamily, ...style}}>
            <div className='about-text'>
            <h2>{title}</h2>
            <p>{text}</p>
            </div>
        </div>
    );
}

export default About;

