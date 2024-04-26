import React from "react"
import "./about.scss"
import { GoPerson } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
    hidden: { opacity: 0, y: 100 },
    up: { opacity: 1, y: -50, transition: { duration: 0.5 } },
    show: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 1,
            restSpeed: 0.01,
            restDelta: 0.01,
            duration: 2
        },
    },
};

const parentVariants = {
    initial: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    animate: {
        transition: { staggerChildren: 0.5, delayChildren: 0.2 }
    }
};



const About = ({ description }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <motion.div className="about" ref={ref} variants={parentVariants} initial="hidden" animate={inView ? ["up", "show"] : "hidden"}>
            <motion.h4 variants={textVariants}>
                <GoPerson style={{ marginRight: '10px' }} />
                ABOUT
            </motion.h4>
            <motion.h2 variants={textVariants}>Few words <span>About me</span></motion.h2>
            <motion.p variants={textVariants}>{description}</motion.p>
        </motion.div>
    )
};

export default About;
