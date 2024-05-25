import React from "react";
import './Gallery.css'
import Button from "./Button";

const Gallery = (props) => {
    return (
        <div className="gallery" style={{backgroundColor: props.backgroundColor, fontFamily: props.fontFamily, color:props.color}}>
            <div className="gallery-left">
            <img src={`/images/${props.images[0]}`} />
            <img src={`/images/${props.images[1]}`} />
            <img src={`/images/${props.images[2]}`} />
            <img src={`/images/${props.images[3]}`} />
            </div>
           
            <div className="gallery-right">
                <h2>Read more</h2>
                <p>{props.text}</p>
                <Button text="READ ME" backgroundColor="transparent" textButtonColor="white" fontFamily="Poppins" style={{border:  '1px solid white'}}/>
            </div>
            
        </div>
    );
};

export default Gallery;
