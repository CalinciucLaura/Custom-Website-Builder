import React from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({ imageUrl}) => {
    return (
        <div className='parallax-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    );
}

export default ParallaxImage;