import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './template.scss';
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';
import About from './about/About';
import Resume from './resume/Resume';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import PortfolioTemplate from './portfolio/PortfolioTemplate';
import Navbar from '../../navbar/Navbar';
import {useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../user_session_state';

export const TemplateGenerator = () => {
  const [user_id] = useRecoilValue(userState);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]); 
  
  const [linkedin, setLinkedin] = useState(undefined);
  const [github, setGithub] = useState(undefined);
  const [role, setRole] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      if (user_id === undefined) return;
      fetch(`/portfolio/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {
              if (data && data.length > 0) {
                  setFirstName(data[2])
                  setLastName(data[3])
                  setEmail(data[4])
                  setPhone(data[5])
                  setAddress(data[6])
                  setDescription(data[7])
                  setImage(data[8])
                  setGithub(data[9])
                  setLinkedin(data[10])
                  setRole(data[11])
                  setColor(data[12])
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
                  setEducation(data.education)
                  setExperience(data.experience)
              } else {
                  console.log('No info received from server')
              }
          })  

      fetch(`/skills/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {
              if (data) {
                  setSkills(data)
              } else {
                  console.log('No info received from server')
              }
          })
      fetch (`/projects/${user_id}`, {
        mode: 'no-cors'
      })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProjects(data)
        } else {
          console.log('No info received from server')
        }
      })
  }, [user_id]) 

  return (
    <Template 
      firstName={firstName} 
      lastName={lastName} 
      email={email} 
      phone={phone} 
      address={address} 
      description={description} 
      image={image} 
      experience={experience} 
      education={education} 
      skills={skills} 
      linkedin={linkedin} 
      github={github} 
      role={role} 
      color={color}
      projects={projects}
      user_id={user_id}
    />
  );
}

const Template = ({
  firstName,
  lastName,
  email,
  phone,
  address,
  description,
  image, 
  experience,
  education, 
  skills, 
  linkedin,
  github,
  role, 
  color,
  projects,
  user_id
}) => {
  const location = useLocation();
  const showNavbar = !location.pathname.includes('preview');

  return (
    <>
    {showNavbar && <Navbar editBtn={true} publishBtn={true} pathEdit={`/portfolio/template/preview`}/> }
    <div className="app">
      <div className="sidebar">
        <Sidebar 
          firstName={firstName} 
          lastName={lastName} 
          address={address} 
          phone={phone} 
          image={image}
          linkedin={linkedin}
          github={github}
          email={email}
          role={role}
          color={color}
        /> 
      </div>
      <div className='content'>
        <section id="home">
          <Home firstName={firstName} lastName={lastName} role={role} color={color}/>
        </section> 
        <section id="about" >
          <About description={description} color={color}/>
        </section>
        <section id="resume" >
          <Resume experience={experience} education={education} color={color}/>
        </section>
        {/* <section id="services" ref={refServices}  >
          Services
        </section> */}
        <section id="skills">
          <Skills skills={skills} color={color}/>
        </section>
        <section id="portfolio">
          <PortfolioTemplate color={color} projects={projects}/>
        </section>
        <section id="contact">
          <Contact email={email} phone={phone} color={color}/>
        </section>
      </div>   
    </div>
    </>
  );
};

export default Template;
