import React, { useState } from "react";
import { GoHome, GoPerson } from "react-icons/go";
import { CgBriefcase } from "react-icons/cg";
import { LiaStreamSolid, LiaShapesSolid, LiaGripVerticalSolid, LiaCommentSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import 'react-tooltip/dist/react-tooltip.css'
import './navbar.scss';
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ isHome, isAbout, isResume, isServices, isSkills, isPortfolio, isTestimonial, isContact }) => {
    const [tooltipState, setTooltipState] = useState({
        'home': false,
        'about': false,
        'resume': false,
        'services': false,
        'skills': false,
        'portfolio': false,
        'testimonial': false,
        'contact': false
    });

    return (
        <div className="navbar">
            <ul className="dmenu scroll-nav d-flex">
                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a
                        className="scroll-to active"
                        href="#home"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Home"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'home': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'home': false })}
                    >
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70} x
                            duration={500}>
                            <GoHome style={{ color: isHome ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"Home"} isVisible={tooltipState['home']} />
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a
                        className="scroll-to "
                        href="#about"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="About"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'about': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'about': false })}
                    >
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <GoPerson style={{ color: isAbout ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"About"} isVisible={tooltipState['about']} />
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a className="scroll-to"
                        href="#resume"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Resume"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'resume': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'resume': false })}>
                        <Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <CgBriefcase style={{ color: isResume ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"Resume"} isVisible={tooltipState['resume']} />
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a className="scroll-to"
                        href="#skills"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Skills"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'skills': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'skills': false })}>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <LiaShapesSolid style={{ color: isSkills ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"Skills"} isVisible={tooltipState['skills']} />
                </motion.li>

                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a className="scroll-to"
                        href="#portfolio"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Portfolio"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'portfolio': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'portfolio': false })}>
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <LiaGripVerticalSolid style={{ color: isPortfolio ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"Portfolio"} isVisible={tooltipState['portfolio']} />
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a className="scroll-to"
                        href="#contact"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Contact"
                        data-tooltip-place="left"
                        onMouseEnter={() => setTooltipState({ ...tooltipState, 'contact': true })}
                        onMouseLeave={() => setTooltipState({ ...tooltipState, 'contact': false })}>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <TfiEmail style={{ color: isContact ? '#ff99cc' : '#999999' }} />
                        </Link>
                    </a>
                    <Tooltip content={"Contact"} isVisible={tooltipState['contact']} />
                </motion.li>
            </ul>
        </div >
    );
};

const Tooltip = ({ content, isVisible }) => {
    return (
        <div
            style={{ position: 'relative', display: isVisible ? 'block' : 'none' }}
        >
            <div style={{ position: 'fixed', transform: 'translate(-60px, -30px)' }}>
                {content}
            </div>
        </div >
    );
};

export default Navbar;