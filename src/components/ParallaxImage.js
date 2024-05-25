import React from 'react';
import './ParallaxImage.scss';

const ParallaxImage = ({ image}) => {
    return (
        <div className='parallax-image'>
            <img src={`/images/${image}`} />
        </div>
         
            // <div className='parallax-image' style={{backgroundImage: image}}></div>
        //  </div>
    );
}

export default ParallaxImage;