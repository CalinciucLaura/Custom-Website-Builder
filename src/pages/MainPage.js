import React from "react"
import './MainPage.scss';
import { Link } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";

const MainPage = (props) => {
  return (
    <div className="main-body">
    <div className="main">
      <h1>Generate a <span>Website</span> for ..</h1>
      <div className="main__content">
        <div className="main__content__item">
          <h2>Business</h2>
          <p>Build a website for your business</p>
        </div>

        <Link to="/portfolio">
        <div className="main__content__item">
          <h2>Portfolio</h2>
          <p>Build a website for your portfolio</p>
        </div>
        </Link>

        <div className="main__content__item">
          <h2>Blog</h2>
          <p>Build a website for your blog</p>
        </div>
        <div className="main__content__item">
            <h2>Ecommerce</h2>
            <p>Build a website for your store</p>
        </div>
    </div>
    <Link to="/generator" style={{textDecoration: 'none'}}>
    <button className="main__button"><FaMagic /> AI Website</button>
    </Link>
    </div>
    </div>
  )
};

export default MainPage;
