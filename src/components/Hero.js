import React from 'react';
import './Hero.css';
import Button from "./Button";


const Hero = ({ className,image, title, text,fontFamily, button, buttonBackgroundColor,  textButtonColor, fontWeight, style}) => {
    console.log(image)
    return (
        <div className={`hero ${className}`} style={{ fontFamily: fontFamily, ...style}}>
            <div className='hero-text'>
                <h1 style={{fontWeight: fontWeight}}>{title}</h1>
                <p>{text}</p>
                {button === 'true' ? <Button text="READ MORE" style={{ backgroundColor: buttonBackgroundColor, border:  `1px solid ${textButtonColor}`, color: textButtonColor}} fontFamily="Poppins"/> : null}
            </div>
            <div className='hero-image' >
                <img src={image}/>
        </div>
        </div>

    );
};

export default Hero;

