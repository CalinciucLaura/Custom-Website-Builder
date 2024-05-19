import React, { useEffect, useState } from "react"
import './MainPage.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";
import Section from './sections/Section';
import { motion } from "framer-motion";
import Navbar from "./navbar/Navbar";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from './user_session_state';

const MainPage = (props) => {  
  const [user_id] = useRecoilValue(userState);

const navigate = useNavigate();
const [idPortfolio, setIdPortfolio] = useState(null); 

useEffect(() => {
  if(!user_id) return;  
  fetch(`/profile/${user_id}`, {
      mode: 'no-cors'
  })
      .then(res => res.json())
      .then(data => {
          setIdPortfolio(data);
      })
}
, [user_id]);


return (
    <div className="main-body">
      <Navbar />      
     <div className="main">
      <h1>Generate a <span>Website</span> for ..</h1>
      <br/>
      <div className="main__content">      
      <Link 
      to={
        user_id === 'undefined' ? 
        `/profile/${user_id}` : 
        (idPortfolio === null ? `/portfolio/` : `/portfolio/template`)
      }
      
      spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
        <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <h2>Portfolio</h2>
          <p>Build a website with your CV</p>
        </motion.div>
        </Link>
      
        {/* <Link to="/portfolio"  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
        <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <h2>Portfolio</h2>
          <p>Build a website for your portfolio</p>
        </motion.div>
        </Link> */}

        <Link to="/portfolio"  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
        <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <h2>Blog</h2>
          <p>Build a website for your blog</p>
        </motion.div>
        </Link>

        <Link to="/portfolio"  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
        <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <h2>Ecommerce</h2>
          <p>Build a website for your store</p>
        </motion.div>
        </Link>

    </div>
    <br/>
    
    <button className="main__button" onClick={()=> navigate("/generator")}><FaMagic /> AI Website</button>
    </div>
    <Section  title = "How to Create a Website?"  text={
    <>
      Our website builder is designed to be user-friendly, flexible, and powerful.
      <br/>
      You don't need any coding skills to use our website builder. 
      <br/>
      Simply choose a template, customize it to your liking, and publish your website. It's that easy!
    </>
    }/>
    <br/>
    <Section  title = "About Us"  text={
    <>
      Our website builder is designed to be user-friendly, flexible, and powerful.
      <br/>
      You don't need any coding skills to use our website builder. 
      <br/>
      Simply choose a template, customize it to your liking, and publish your website. It's that easy!
    </>
    }/>
     <br/>
    <Section  title = "About Us"  text={
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
