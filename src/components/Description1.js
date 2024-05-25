import React from "react";
import './Description.css';
import Button from "./Button";

const Description1 = ({ title, text, image, backgroundColor, textColor, fontFamily, widthImage, widthText, style }) => {
    return (
        <div className='description' style={{color: textColor, fontFamily: fontFamily , ...style}}>
            <div className='description-image' style={{width: widthImage}}>
            src={`/images/${image}`}
            </div>
            <div className='description-text' style={{backgroundColor: backgroundColor, width: widthText}}>
            <div className="description-text-box" >
            <h2>{title}</h2>
            <p>{text}</p>
            <Button text="READ ME" backgroundColor="transparent" textColor="black" fontFamily="Poppins" style={{border:  '1px solid black'}}/>
            </div>
            </div>
            
        </div>
    );
}

export default Description1;