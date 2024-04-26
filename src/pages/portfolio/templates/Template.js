import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './template.scss';
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';
import About from './about/About';
import { useInView } from "react-intersection-observer";
import Resume from './resume/Resume';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import PortfolioTemplate from './portfolio/PortfolioTemplate';

const Template = () => {

  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
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

      fetch(`/experience_education/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {              
              if (data) {
                  console.log(data)
                  setEducation(data.education)
                  setExperience(data.experience)
              } else {
                  console.log('No info received from server')
              }
          })  
          console.log('Education', education)
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
        <section id="home">
          <Home firstName={firstName} lastName={lastName}/>
        </section> 
        <section id="about" >
          <About description={description}/>
        </section>
        <section id="resume" >
          <Resume experience={experience} education={education}/>
        </section>
        {/* <section id="services" ref={refServices}  >
          Services
        </section> */}
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <PortfolioTemplate />
        </section>
        <section id="contact">
          <Contact email={email} phone={phone}/>
        </section>
      </div>   
    </div>
  );
};

export default Template;
