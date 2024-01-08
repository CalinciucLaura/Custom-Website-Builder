import React from "react";
import './Quote.css';

const Quote = ({ text, author, backgroundColor, textColor, fontFamily }) => {
    return (
        <div className='quote' style={{backgroundColor: backgroundColor, color: textColor, fontFamily: fontFamily}}>
            <div className='quote-text'>
            <p>{text}</p>
            <p>{author}</p>
            </div>
        </div>
    );
}

export default Quote;