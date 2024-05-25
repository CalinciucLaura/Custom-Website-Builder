import React from 'react';
import './AboutComponent.scss';

const About = ({ title, text, textAlign, textColor, fontFamily, backgroundColor, style}) => {    
    return (
        <div className='about_component' style={{textAlign: textAlign, color: textColor,backgroundColor: backgroundColor, fontFamily: fontFamily, ...style}}>
            <div className='about-text'>
            <h2>{title}</h2>
            <p>{text}</p>
            </div>
        </div>
    );
}

export default About;

