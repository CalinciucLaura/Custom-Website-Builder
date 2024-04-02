import React from "react"
import "./portfolioPage2.scss";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";

const PortfolioPage2 = (props) => {

const [experience, setExperience] = useState(undefined);

const addExperience = () => {
    alert('Add Experience');
}

  return (
    <div className="portfolioPage2">
    <h1>Experience <span> & Education</span></h1>
    <div className="experience">
    <h2>Experience</h2>
    <a onClick={addExperience}><FaCirclePlus id="plusBtn"/>
    </a>
    </div>
    <div className="education">
    <h2>Education</h2>
    <a onClick={addExperience}><FaCirclePlus id="plusBtn"/>
    </a>
    </div>
    </div>
   
  )
};

export default PortfolioPage2;
