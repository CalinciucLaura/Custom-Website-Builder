import React from "react"
import "../resume/resume.scss"
import { LiaGripVerticalSolid } from 'react-icons/lia';

const PortfolioTemplate = ({ color }) => {
    return (
        <div className="resume">
            <h3><LiaGripVerticalSolid style={{ marginRight: '10px' }} />PORTFOLIO</h3>
            <h1>My <span style={{ color: color }}>Projects</span></h1>
        </div>
    );
};

export default PortfolioTemplate;
