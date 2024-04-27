import React, { useEffect } from "react"
import '../resume/resume.scss'
import { LiaShapesSolid } from "react-icons/lia";

const Skills = ({ skills, color }) => {
    return (
        <div className="resume">
            <h3><LiaShapesSolid style={{ marginRight: '10px' }} />MY SKILLS</h3>
            <h1>My <span style={{ color: color }}>Skills</span></h1>
            <div className="content">
                {skills.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <h2>{item[0]}</h2>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
};

export default Skills;
