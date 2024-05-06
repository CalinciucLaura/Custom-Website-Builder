import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import './portfolioPage2.scss'
import { FiPlus } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import AddProject from './AddProject';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackNext from '../buttons/BackNext';
AOS.init();

const PortfolioPage4 = () => {
    const { user_id } = useParams();
    const [showCardProjects, setShowCardProjects] = useState(false);
    const [cardsProjects, setCardsProjects] = useState([]);
    const [showAddProject, setShowAddProject] = useState(false);
    const [projectEditCard, setProjectEditCard] = useState(null);
    const [projectEditCardIndex, setProjectEditCardIndex] = useState(null);
    const navigate = useNavigate();
    
    const toggleAddProject = (force = true) => {
        if(force) {
            setProjectEditCard(null);
        setProjectEditCardIndex(null);
        }
        setShowAddProject(!showAddProject);
    }

    const handleAddProjects = (newCard) => {
        setShowCardProjects(true);
        setCardsProjects(prevCards => [...prevCards, newCard]);
        submitProjects(newCard);
    }

    const submitProjects = async (projectsData) => {
        const response = await fetch(`/projects/${user_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectsData),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
      }

    return (
        <div className="portfolio-body" data-aos="fade-left">
            <Navbar />
            <BackNext path={`/portfolio/color/${user_id}`} />
            <div className="portfolioPage2">
                <h1>Personal <span>Projects</span></h1>
                <br/>
                <Button color="warning" onClick={toggleAddProject}>
                <FiPlus /> Add Project
                </Button>
                <br/>
                <AddProject
                    onAddProject={handleAddProjects}
                    toggle={toggleAddProject}
                    isOpen={showAddProject}
                    editCard={projectEditCard}
                    editCardIndex={projectEditCardIndex}
                    editExisting={(index, card) => {
                        const newCards = [...cardsProjects];
                        newCards[index] = card;
                        setCardsProjects(newCards);
                    }}
                />
                 <div className="cards">
                    {cardsProjects.map((card, index) => 
                     <div className="card" style={{ width: "18rem" }} key={index}>
                     <div className="card-header">
                         <h5 className="card-title">{card.role}</h5>
                     </div>
                     <div className="card-body">
                         <p className="card-text" style={{ fontWeight: 700 }}>{card.title}</p>
                        <button onClick={()=>{
                    let newCards = [...cardsProjects];
                    newCards.splice(index, 1);
                    setCardsProjects(newCards);
                        }} className="btn btn-danger" style={{ float: 'left', marginLeft:'5px' }}><FaTrashCan /> Delete</button>
                       
                <button onClick={()=>{                  
                  setProjectEditCard(card);
                  setProjectEditCardIndex(index);
                  toggleAddProject(false);
                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
                     </div>
                 </div>
                )}           
                </div>
               
            </div>
        </div>
    )
};

export default PortfolioPage4;
