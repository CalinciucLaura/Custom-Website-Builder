import React from "react"
import "./about.scss"
import { GoPerson } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
    // initial: {
    //     y: 0,
    //     opacity: 0,
    // },

    // animate: {
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //         type: 'spring',
    //         stiffness: 100,
    //         damping: 15,
    //         mass: 1,
    //         restSpeed: 0.01,
    //         restDelta: 0.01,
    //     },
    // },

    // scrollText: {
    //     opacity: 1,
    //     y: -100,
    //     transition: {
    //         duration: 2
    //     },
    // },

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



const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <motion.div className="about" ref={ref} variants={parentVariants} initial="hidden" animate={inView ? ["up", "show"] : "hidden"}>
            <motion.h4 variants={textVariants}>
                <GoPerson style={{ marginRight: '10px' }} />
                ABOUT
            </motion.h4>
            <motion.h2 variants={textVariants}> Every great design begin with an even <span>better story</span></motion.h2>
            <motion.p variants={textVariants}>I can describe myself as a very friendly person, quick learner, and I enjoy showcasing my abilities. I am dedicated to studying and believe that learning never stops. I have a particular passion for frontend, but I am open to working in backend as well.</motion.p>
        </motion.div>
    )
};

export default About;
