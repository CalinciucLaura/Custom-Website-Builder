import React from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({ image1}) => {
    return (
        <div className='parallax-image'>
             <img src={`/images/${image1}`} />
        </div>
    );
}

export default ParallaxImage;