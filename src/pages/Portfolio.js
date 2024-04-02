import React from "react"
import "./MainPage.scss";
import UploadImage from "./UploadImage";
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  return (
    <div className="main">
      <h1>Complete your <span>Resume</span></h1>
      <div className="blocks">
      <div className="input-block-left">
        <label>First name</label>
        <input type="text" placeholder="First Name" required/>
        <label>Last name</label>
        <input type="text" placeholder="Last Name" required />
        <label>Email</label>
        <input type="text" placeholder="Email" required/>
      </div>
      <div className="input-block-right">
        <label>Phone</label>
        <input type="text" placeholder="Phone" />
        <label>Address</label>
        <input type="text" placeholder="Address" />
        <label>Upload a profile photo</label>
        <UploadImage />
      </div> 
      </div>
      {/* <textarea type="text" placeholder="Write a short description about yourself" /> */}
      <Link to="/portfolio/about">
      <button>Next</button>
      </Link>
    </div>
  )
};

export default Portfolio;
