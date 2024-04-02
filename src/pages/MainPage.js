import React from "react"
import './MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  return (
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
    <h1>Generate with <span>AI</span> ..</h1>
    </div>
  )
};

export default MainPage;
