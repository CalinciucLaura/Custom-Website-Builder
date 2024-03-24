import React from "react";
import './Gallery.css'
import Button from "./Button";

const Gallery = (props) => {
    return (
        <div className="gallery" style={{backgroundColor: props.backgroundColor, fontFamily: props.fontFamily, color:props.color}}>
            <div className="gallery-left">
            <img src={props.images[0]} />
            <img src={props.images[1]} />
            <img src={props.images[2]} /> 
            <img src={props.images[3]} />
            </div>
            <div className="gallery-right">
                <h2 >Discover our Locations</h2>
                <p>{props.text}</p>
                <Button text="READ ME" backgroundColor="transparent" textColor="black" fontFamily="Poppins" style={{border:  '1px solid black'}}/>
            </div>
            
        </div>
    );
};

export default Gallery;
