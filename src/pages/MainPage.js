import React from "react"
import './MainPage.scss';
import { Link } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";
import Navbar from './navbar/Navbar';
import Section from './sections/Section';
import { VscAccount } from "react-icons/vsc";

const MainPage = (props) => {
  return (
    <div className="main-body">
      <div className="top">
      <Navbar/>
      <VscAccount style={{fontSize:'35px', margin:'5px', color:'#cee73d'}}/>
      </div>
    <div className="main">
      <h1>Generate a <span>Website</span> for ..</h1>
      <br/>
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
    <br/>
    <Link to="/generator" style={{textDecoration: 'none'}}>
    <button className="main__button"><FaMagic /> AI Website</button>
    </Link>
    </div>
    <Section  title = "How to Create My Website?"  text={
    <>
      Our website builder is designed to be user-friendly, flexible, and powerful.
      <br/>
      You don't need any coding skills to use our website builder. 
      <br/>
      Simply choose a template, customize it to your liking, and publish your website. It's that easy!
    </>
    }/>
    </div>
  )
};

export default MainPage;
