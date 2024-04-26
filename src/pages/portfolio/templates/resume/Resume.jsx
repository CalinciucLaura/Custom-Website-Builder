import React, { useEffect } from "react"
import "./resume.scss"
import { LiaStreamSolid } from "react-icons/lia";

const Resume = ({ experience, education }) => {
    useEffect(() => {
        console.log("Education", education);
    }, [education]);

    useEffect(() => {
        console.log("Experience", experience);
    }, [experience]);


    return (
        <div className="resume">
            <h3><LiaStreamSolid style={{ marginRight: '10px' }} />RESUME</h3>
            <h1>Education & <span>Experience</span></h1>
            <h5>Education</h5>
            <br />
            <div className="content">
                {education.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <h4>{item[2]} - {item[3] === "" ? "Present" : item[3]}</h4>
                            <h2>{item[4]}</h2>
                            <p>{item[5]}</p>
                        </div>
                    )
                }
                )}
            </div>

            <h5>Experience</h5>
            <br />
            <div className="content">
                {experience.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <h4>{item[2]} - {item[3] === "" ? "Present" : item[3]}</h4>
                            <h2>{item[4]}</h2>
                            <p>{item[5]}</p>
                        </div>
                    )
                }
                )}
            </div>

        </div>

    )
};

export default Resume;
