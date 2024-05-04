import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#cee73d",
    borderRadius: "50%"
};

const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "100%"
    }
};

const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
};

export default function ThreeDotsWave() {
    return (
        <div
            style={{
                margin: "auto",
                width: "100%",
                top: "50%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <motion.div
                style={LoadingContainer}
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
            >
                {[...Array(3)].map((_, i) => (
                    <motion.div key={i} style={LoadingDot} variants={DotVariants} transition={DotTransition} />
                ))}
            </motion.div>
        </div>
    );
}
