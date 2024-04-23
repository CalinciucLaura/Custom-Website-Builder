import React from "react"
import "./home.scss"
import { motion } from "framer-motion";
import scrollImage from "./scroll.png";
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

const Home = () => {
    return (
        <div className="home">

            <h3> <GoHome style={{ marginRight: '10px' }} />INTRODUCE</h3>
            <h1>Hi, I'm <span>Laura </span><br /> Junior Developer & <br /> Computer Science Student </h1>
            {/* <h1>Meet Laura, <br />a student <br /> with a passion for coding and design.</h1> */}
            <p> I'm deeply passionate about frontend development, where I can blend my love for creativity with my technical skills.
            </p>
            <a href="cv.pdf" download="LauraResume">
                <button><FaDownload style={{ marginRight: '15px', fontSize: '16px' }} />Download Resume</button></a>
            <motion.img variants={textVariants} animate="scrollButton" src={scrollImage} alt="" />

        </div>


    )
};

export default Home;
