import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import { useInView } from "react-intersection-observer";
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Portfolio from './components/portfolio/Portfolio';

function App() {
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
  const [refTestimonial, inViewTestimonial] = useInView({
    triggerOnce: false,
  });
  const [refContact, inViewContact] = useInView({
    triggerOnce: false,
  });


  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar /> 
      </div>

      <div className='content'>
        <section id="home" ref={refHome} >
          <Home />
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
          <Portfolio />
        </section>
        {/* <section id="testimonial" ref={refTestimonial} >
          <Testimonial />
        </section> */}
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
          isPortfolio={inViewPortfolio && !inViewTestimonial} 
          // isTestimonial={inViewTestimonial && !inViewContact}  
          isContact={inViewContact}
        /> 
      </div>
    </div>
  );
}

export default App;
