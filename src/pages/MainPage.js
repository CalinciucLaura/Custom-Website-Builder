import React, { useEffect, useState } from "react"
import './MainPage.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";
import Section from './sections/Section';
import { motion } from "framer-motion";
import Navbar from "./navbar/Navbar";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from './user_session_state';
import Login from "./modals/Login";
import portfolioImage from "../pages/portfolio/templates/PortfolioExample.png";
import ProgressBar from "./Bars/ProgressBar";

const MainPage = (props) => {
  const [user_id] = useRecoilValue(userState);
  const navigate = useNavigate();
  const [idPortfolio, setIdPortfolio] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!user_id) return;
    fetch(`/portfolio/${user_id}`, {
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setIdPortfolio(data[0]);
        }
      })
  }
    , [user_id]);


  return (
    <div className="main-body">
      {!user_id ? <Navbar loginBtn={true} logoutBtn={false} /> : <Navbar loginBtn={false} logoutBtn={true} />}
      <br />
      <br/>
      <br/>

      <ProgressBar />
      
      <Section title="Create Stunning Websites in Minutes" text={
        <>
         
          You don't need any coding skills to use our website builder.
        </>
      } />

      <div className="main">
         {/* <h1>Generate a <span>Website</span> for ..</h1>

        <br />  */}
        <div className="main__content">
          <Link
            to={
              !user_id ?
                `/`:
                (idPortfolio === null ? `/portfolio/` : `/portfolio/template`)
            }
            offset={-70}
            duration={500}
            className="btn"
            onClick={() => {
              if (!user_id) {
                setShowLoginModal(true);
              }
            }}>            
            <Login modal={showLoginModal} toggle={() => setShowLoginModal(!showLoginModal)} />

            <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <h2>Portfolio</h2>
              <p>Build a website with your CV</p>
            </motion.div>
          </Link>

          <Link to="/portfolio"  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn">
        <motion.div className="main__content__item" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <h2>Bussines</h2>
          <p>Build a website for your Bussines</p>
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
        <br />

        <button onClick={() =>
        {
          if (!user_id) {
            setShowLoginModal(true);
            }
            else{
              navigate("/generator")}
            }
        }
          ><FaMagic /> AI Website</button>
      </div>
      {/* <Section title="Create Stunning Websites in Minutes" text={
        <>
         
          You don't need any coding skills to use our website builder.
        </>
      } /> */}
      <img src={portfolioImage} alt="Portfolio Example" />
   
   
      {/* <br />
      <Section title="About Us" text={
        <>
          Our website builder is designed to be user-friendly, flexible, and powerful.
          <br />
          You don't need any coding skills to use our website builder.
          <br />
          Simply choose a template, customize it to your liking, and publish your website. It's that easy!
        </>
      } />
      <br />
      <Section title="About Us" text={
        <>
          Our website builder is designed to be user-friendly, flexible, and powerful.
          <br />
          You don't need any coding skills to use our website builder.
          <br />
          Simply choose a template, customize it to your liking, and publish your website. It's that easy!
        </>
      } /> */}

    </div>
  )
};

export default MainPage;
