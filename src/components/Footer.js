import React from "react";

const Footer = ({ backgroundColor, textColor, fontFamily }) => {
    return (
        <div className='footer' style={{backgroundColor: backgroundColor, color: textColor, fontFamily: fontFamily}}>
            <div className='footer-text'>
                <p>© 2020 MODERN Design</p>
            </div>
        </div>
    );
}

export default Footer;