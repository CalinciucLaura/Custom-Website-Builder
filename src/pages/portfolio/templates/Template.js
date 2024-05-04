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
  const [skills, setSkills] = useState([]); 
  const { user_id } = useParams();
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
                  setFirstName(data[1])
                  setLastName(data[2])
                  setEmail(data[3])
                  setPhone(data[4])
                  setAddress(data[5])
                  setDescription(data[6])
                  setImage(data[7])
                  setGithub(data[8])
                  setLinkedin(data[9])
                  setRole(data[10])
                  setColor(data[11])
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
  );
};

export default Template;
