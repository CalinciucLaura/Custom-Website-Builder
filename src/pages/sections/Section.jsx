import React from "react"
import './section.scss';

const Section = ({ title, text }) => {
    return (
        <div className="section">
            <h1> {title} </h1>
            <p> {text} </p>
        </div>
    )
};

export default Section;
