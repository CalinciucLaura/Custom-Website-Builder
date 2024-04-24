import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './template.scss';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import { useInView } from "react-intersection-observer";
import Resume from './resume/Resume';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import PortfolioTemplate from './portfolio/PortfolioTemplate';

const Template = () => {

  const [refHome, inViewHome] = useInView({
    triggerOnce: false,
  });
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
  });
  const [refResume, inViewResume] = useInView({
    triggerOnce: false,
  });
  const [refServices, inViewServices] = useInView({
    triggerOnce: false,
  });
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: false,
  });
  const [refPortfolio, inViewPortfolio] = useInView({
    triggerOnce: false,
  });
  const [refContact, inViewContact] = useInView({
    triggerOnce: false,
  });

  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const { user_id } = useParams();

  useEffect(() => {
      if (user_id === undefined) return;
      fetch(`/portfolio/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data && data.length > 0) {
                  setFirstName(data[1])
                  setLastName(data[2])
                  setEmail(data[3])
                  setPhone(data[4])
                  setAddress(data[5])
                  setDescription(data[6])
                  setImage(data[7])
              } else {
                  console.log('No info received from server')
              }
          })
  }, [user_id])


  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar 
          firstName={firstName} 
          lastName={lastName} 
          address={address} 
          phone={phone} 
          image={image}
        /> 
      </div>
      <div className='content'>
        <section id="home" ref={refHome} >
          <Home firstName={firstName} lastName={lastName}/>
        </section> 
        <section id="about" ref={refAbout} >
          <About />
        </section>
        <section id="resume" ref={refResume} >
          <Resume />
        </section>
        {/* <section id="services" ref={refServices}  >
          Services
        </section> */}
        <section id="skills" ref={refSkills} >
          <Skills />
        </section>
        <section id="portfolio" ref={refPortfolio} >
          <PortfolioTemplate />
        </section>
        <section id="contact" ref={refContact} >
          <Contact />
        </section>
      </div>   

      <div className="navbar">
        <Navbar 
          isHome={inViewHome && !inViewAbout}
          isAbout={inViewAbout && !inViewResume} 
          isResume={inViewResume && !inViewServices} 
          // isServices={inViewServices && !inViewSkills} 
          isSkills={inViewSkills && !inViewPortfolio} 
          isPortfolio={inViewPortfolio } 
          isContact={inViewContact}
        /> 
      </div>
    </div>
  );
};

export default Template;
