import React from "react"
import "./portfolio.scss"
import { LiaGripVerticalSolid } from 'react-icons/lia';
import site2 from "./site2.png"
import site1 from "./site1.png"
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";

const items = [
    {
        h2: "Ice Cream Website",
        p: "React, Sass, Figma",
        span: <DiGithubBadge />,
        link: "https://github.com/CalinciucLaura/IceCream.git"
    },
    {
        h2: "HEMA - Herbal Website",
        p: "HTML, CSS, JS",
        span: <DiGithubBadge />,
        link: "https://github.com/CalinciucLaura/HEMA-Website.git"
    },
    {

        h2: "CChat - Messenger App",
        p: "C, SQLite",
        span: <DiGithubBadge />,
        link: "https://github.com/CalinciucLaura/Offline-Messenger.git"
    },
    {

        h2: "Numerical Estimation",
        p: "Python",
        span: <DiGithubBadge />,
        link: "https://github.com/CalinciucLaura/Numerical-Estimation.git"
    },
    {

        h2: "This Website",
        p: "React, Sass, Framer Motion",
        span: <DiGithubBadge />,
        link: "https://github.com/CalinciucLaura/Personal-Portfolio.git"
    }
]


const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <h3> <LiaGripVerticalSolid style={{ marginRight: '10px' }} />PORTFOLIO</h3>
            <h1>My <span>Projects</span></h1>
            <div className="projects">
                <img src={site2} />
                <img src={site1} />
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <a href={item.link} style={{ textDecoration: 'none' }} key={index}>
                        <motion.div
                            className="item"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h2>{item.h2}</h2>
                            <p>{item.p}
                                <span>{item.span}</span>
                            </p>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
