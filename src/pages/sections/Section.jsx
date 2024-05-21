import React from "react"
import './section.scss';

const Section = ({ title, text, sectionBtn }) => {
    return (
        <div className="section">
            <h1> {title} </h1>
            <p> {text} </p>
            {sectionBtn ? <>{sectionBtn}</> : null}
            <br />
        </div>
    )
};

export default Section;
