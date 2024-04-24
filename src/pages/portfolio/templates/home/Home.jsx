import React from "react";
import "./home.scss"
import { motion } from "framer-motion";
import { GoHome } from 'react-icons/go';
import { FaDownload } from "react-icons/fa";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 30,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};


const Home = ({ firstName, lastName }) => {
    return (
        <div className="home">
            <h3> <GoHome style={{ marginRight: '10px' }} />INTRODUCE</h3>
            <h1>Hi! <br /> I'm <span>{firstName} {lastName}</span></h1>
            <a href="cv.pdf" download="Resume">
                <button><FaDownload style={{ marginRight: '5px', fontSize: '15px' }} />Download Resume</button></a>
            <motion.img variants={textVariants} animate="scrollButton" alt="" />
        </div>
    )
};

export default Home;
