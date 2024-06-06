import React from "react";
import './Description.css';
import Button from "./Button";
import { BsStars } from "react-icons/bs";
import ChatGPTModal from '../pages/modals/ChatGPTModal';
import { useState } from "react";


const Description = ({className,number,title, text, image, backgroundColor, textColor, fontFamily, widthImage, widthText, fontSizeTitle, fontSizeParagraph, paragraphColor, lineHeightP, button, backgroundColorButton,textButtonColor,
fontFamilyButton, swichObjects, section, style }) => {

    const [showModal, setShowModal] = useState(false);

    const handleIcon = () => {
        setShowModal(!showModal);
    }

    return swichObjects === 'false' ?
    (
        <div className='description' style={{color: textColor, fontFamily: fontFamily, ...style}}>
            <div className={`description-text ${className}`} style={{backgroundColor: backgroundColor, width: widthText, padding:'0 30px' }}>
                <div className="description-text-box" >
                <ChatGPTModal modal={showModal} toggle={handleIcon} text={text} section={section} />    
                <BsStars className='icon' onClick={handleIcon}/>
                    <h3>{number}</h3>
                    <h2 style={{fontSize: fontSizeTitle}}>{title}</h2>
                    <p style={{fontSize: fontSizeParagraph, lineHeight: lineHeightP, backgroundColor: paragraphColor,  }}>{text}</p>
                    {button === 'true'  ? <Button text="READ MORE" style={{backgroundColor: backgroundColorButton,  color: textButtonColor,  fontFamily: fontFamilyButton , border: `1px solid ${textButtonColor}`}}/> : null }
                </div>
            </div>
            <div className='description-image' style={{width: widthImage}}>
                <img src={`/images/${image}`} />
            </div>            
        </div>
    )
    :
    (
        <div className='description' style={{color: textColor, fontFamily: fontFamily, ...style}}>
            <div className='description-image' style={{width: widthImage}}>
                    <img  src={`/images/${image}`} alt="" />
                </div>  
            <div className='description-text' style={{backgroundColor: backgroundColor, width: widthText, padding:'0 30px' }}>
                <div className="description-text-box">
                <ChatGPTModal modal={showModal} toggle={handleIcon} text={text} section={section} />     
                <BsStars className='icon' onClick={handleIcon}/>
                    <h3>{number}</h3>
                    <h2 style={{fontSize: fontSizeTitle}}>{title}</h2>
                    <p style={{fontSize: fontSizeParagraph, lineHeight: lineHeightP}}>{text}</p>
                    {button === 'true'  ? <Button text="READ MORE" style={{backgroundColor: backgroundColorButton,  color: textButtonColor,  fontFamily: fontFamilyButton , border: `1px solid ${textButtonColor}`}}/> : null }
                </div>
            </div>
        </div>
    );
}

export default Description;