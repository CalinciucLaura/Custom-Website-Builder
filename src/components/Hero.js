import React, {useState} from 'react';
import './Hero.css';
import Button from "./Button";
import { BsStars } from "react-icons/bs";
import ChatGPTModal from '../pages/modals/ChatGPTModal';

const Hero = ({ className, image, title, text, fontFamily, button, buttonBackgroundColor, textButtonColor, fontWeight, style })  => {
    const [showModal, setShowModal] = useState(false);

    const handleIcon = () => {
        setShowModal(!showModal);
    }

    return (
        <div className={`hero ${className}`} style={{ fontFamily: fontFamily, ...style }}>
            <div className='hero-text'>
            <ChatGPTModal modal={showModal} toggle={handleIcon} message={title} />    
            <BsStars className='icon' onClick={handleIcon}/>
                <h1 style={{ fontWeight: fontWeight }}>{title}</h1>
                <p>{text}</p>
                {button === 'true' ? <Button text="READ MORE" style={{ backgroundColor: buttonBackgroundColor, border: `1px solid ${textButtonColor}`, color: textButtonColor }} fontFamily="Poppins" /> : null}
            </div>
            <div className='hero-image'>
            <img src={`/images/${image}`} />
            
            </div>
        </div>

    );
}

export default Hero;

