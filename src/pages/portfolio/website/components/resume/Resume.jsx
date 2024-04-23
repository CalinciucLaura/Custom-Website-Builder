import React from "react"
import "./resume.scss"
import { LiaStreamSolid } from "react-icons/lia";

const Resume = () => {
    return (
        <div className="resume">
            <h3><LiaStreamSolid style={{ marginRight: '10px' }} />RESUME</h3>
            <h1>Education & <span>Experience</span></h1>
            <div className="content">
                <div className="item">
                    <h4>2023 - Present</h4>
                    <h2>ShopperConvert Co-Founder</h2>
                    <p>Marketing Agency and IT Services</p>
                </div>

                <div className="item">
                    <h4>2021 - 2024</h4>
                    <h2>Bachelor's Degree in Computer Science</h2>
                    <p>"Alexandru Ioan Cuza" University</p>
                </div>

                <div className="item">
                    <h4>2018 - 2020</h4>
                    <h2>Web Designer</h2>
                    <p>Freelance</p>
                </div>


                <div className="item">
                    <h4>2017 - 2021</h4>
                    <h2>Computer Science High School </h2>
                    <p>"Eudoxiu Hurmuzachi" Radauti</p>
                </div>

            </div>
        </div>
    )
};

export default Resume;
