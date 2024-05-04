import React from "react"
import "../resume/resume.scss"
import { LiaGripVerticalSolid } from 'react-icons/lia';

const PortfolioTemplate = ({ color, projects }) => {
    return (
        <div className="resume">
            <h3><LiaGripVerticalSolid style={{ marginRight: '10px' }} />PORTFOLIO</h3>
            <h1>My <span style={{ color: color }}>Projects</span></h1>
            <br />
            <div className="content">
                {projects.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <h4>{item[2]}</h4>
                            <h2>{item[3]}</h2>
                            <p>{item[4]}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default PortfolioTemplate;
