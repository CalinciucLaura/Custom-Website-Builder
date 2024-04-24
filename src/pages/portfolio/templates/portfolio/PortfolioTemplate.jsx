import React from "react"
import "./portfoliotemplate.scss"
import { LiaGripVerticalSolid } from 'react-icons/lia';
import { motion } from "framer-motion";

const PortfolioTemplate = (props) => {
    return (
        <div className="portfolio-template">
            <h3><LiaGripVerticalSolid style={{ marginRight: '10px' }} />PORTFOLIO</h3>
            <h1>My <span>Projects</span></h1>
        </div>
    );
};

export default PortfolioTemplate;
