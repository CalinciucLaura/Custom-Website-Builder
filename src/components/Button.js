import React from "react";
import './Button.css';

const Button = ({ text, backgroundColor, textButtonColor, fontFamily, style }) => {
    return (
        <button className="buttonStyle" style={{backgroundColor: backgroundColor, color: textButtonColor, fontFamily: fontFamily, ...style}}>{text}</button>
    );
}

export default Button;