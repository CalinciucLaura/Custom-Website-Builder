import React from "react"
import './skills.scss'
import { LiaShapesSolid } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import c_plus from "./c++.png";

const Skills = (props) => {
    return (
        <div className="skills">
            <h3><LiaShapesSolid style={{ marginRight: '10px' }} />MY SKILLS</h3>
            <h1>My <span>Skills</span></h1>
            <div className="elements">
                <div className="element">
                    <FaPython id="icon" />
                    <p>Python</p>
                </div>
                <div className="element">
                    <FaReact id="icon" />
                    <p>React</p>
                </div>
                <div className="element">
                    <img src={c_plus} alt="c++" />
                    <p>C++</p>
                </div>
                <div className="element">
                    <IoLogoJavascript id="icon" />
                    <p>JavaScript</p>
                </div>
                <div className="element">
                    <FaJava id="icon" />
                    <p>Java</p>
                </div>
                <div className="element">
                    <SiFramer id="icon" />
                    <p>Framer</p>
                </div>

                <div className="element">
                    <FaDatabase id="icon" />
                    <p>SQL</p>
                </div>


                <div className="element">
                    <FaHtml5 id="icon" />
                    <p>HTML</p>
                </div>

                <div className="element">
                    <FaCss3Alt id="icon" />
                    <p>CSS</p>
                </div>

                <div className="element">
                    <FaSass id="icon" />
                    <p>Sass</p>
                </div>
                <div className="element">
                    <IoLogoFigma id="icon" />
                    <p>Figma</p>
                </div>
            </div>

        </div>
    )
};

export default Skills;
