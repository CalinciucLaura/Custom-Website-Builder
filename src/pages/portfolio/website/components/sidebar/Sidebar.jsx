import React from "react"
import "./sidebar.scss"
import profileImage from "../../images/laura2.jpeg"
import { TfiEmail } from "react-icons/tfi";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Sidebar = (props) => {
    return (
        <div className="profile">
            <div className="header">
                <h1>Laura Calinciuc</h1>
                <h5>Frontend Developer</h5>
            </div>
            <div className="image-container"><img src={profileImage} alt="Laura" /></div>

            <h3>Iasi Romania <br /> Computer Science Student 3th Year</h3>

            <div className="social">
                <a href="https://github.com/CalinciucLaura?tab=repositories" >
                    <DiGithubBadge style={{ fontSize: '20px', border: '2px solid #575757', padding: '15px', borderRadius: '50%' }} />
                </a>
                <a href="https://www.linkedin.com/in/laura-calinciuc/" >
                    <FaLinkedin style={{ fontSize: '20px', border: '2px solid #575757', padding: '15px', borderRadius: '50%' }} />
                </a>
            </div>

            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <button>
                        <TfiEmail style={{ marginRight: '15px', fontSize: '16px' }} />HIRE ME!
                    </button>
                </motion.div>
            </Link>
        </div >

    )
};

export default Sidebar;
