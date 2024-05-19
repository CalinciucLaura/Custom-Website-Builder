import React, { useEffect, useState } from 'react';
import "./portfolioPage2.scss";
import AddExperienceModal from "./AddExperienceModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import AddEducationModal from "./AddEducationModal";
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FiPlus } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import Navbar from '../navbar/Navbar';
import BackNext from '../buttons/BackNext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRecoilValue } from 'recoil';
import { userState } from '../user_session_state';
AOS.init();

const PortfolioPage2 = () => {
  const [user_id] = useRecoilValue(userState);
  const [showCardEducation, setShowCardEducation] = useState(false);
  const [showCardExperience, setShowCardExperience] = useState(false);
  const [cardsEducation, setCardsEducation] = useState([]);
  const [cardsExperience, setCardsExperience] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [showAddEducation, setShowAddEducation] = useState(false);  
  
  const toggleAddExperience = (force = true) => {
    if(force) {
      setExperienceEditCard(null);
    setExperienceEditCardIndex(null);
    }
    setShowAddExperience(!showAddExperience);
  }
  const toggleAddEducation = (force = true) => {
    if(force) {
      setEducationEditCard(null);
      setEducationEditCardIndex(null);
    }    
    setShowAddEducation(!showAddEducation);
  }

  const [experienceEditCard, setExperienceEditCard] = useState(null);
  const [educationEditCard, setEducationEditCard] = useState(null);
  const [experienceEditCardIndex, setExperienceEditCardIndex] = useState(null);
  const [educationEditCardIndex, setEducationEditCardIndex] = useState(null);

  const handleAddExperience = (newCard) => {
    setShowCardExperience(true);
    setCardsExperience(prevCards => [...prevCards, newCard]);
    submitExperience(newCard);
  }

  const handleAddEducation = (newCard) => {
    setShowCardEducation(true);
    setCardsEducation(prevCards => [...prevCards, newCard]);
    submitEducation(newCard);
  }

  const submitExperience = async (experienceData) => {
    const response = await fetch(`/experience/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experienceData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  };  

  const submitEducation = async (educationData) => {
    const response = await fetch(`/education/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(educationData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  };

  return (
    <div className="portfolio-body">
         <Navbar/>
      <BackNext path={`/portfolio/skills/${user_id}`} />
      <div className="portfolioPage2" data-aos = "fade-left">
        <h1>2. Experience <span> & Education</span></h1>
        <br/>
        <br/>
        <Button color="warning" onClick={toggleAddExperience}>
          <FiPlus /> Add Experience
        </Button>
        <br/>
        <AddExperienceModal 
          onAddExperience={handleAddExperience} 
          toggle={toggleAddExperience}
          isOpen={showAddExperience}
          editCard={experienceEditCard}
          editCardIndex={experienceEditCardIndex}
          editExisting={(index, card) => {
            let newCards = [...cardsExperience];
            newCards[index] = card;
            setCardsExperience(newCards);
          }}
        />
        <div className="cards">
          {cardsExperience.map((card, index) => 
            <div className="card" style={{ width: "18rem" }} key={index}>
              <div className="card-header">
                <h5 className="card-title">{card.role}</h5>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>Start: {card.startingDate}</p>
                <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>End: {card.endingDate}</p>
                <p className="card-text" style={{ fontWeight: 700 }}>{card.company}</p>
                <p className="card-text" style={{ fontSize: '15px' }}>{card.city}</p>
                <button onClick={()=>{
                  let newCards = [...cardsExperience];
                  newCards.splice(index, 1);
                  setCardsExperience(newCards);                  
                }} className="btn btn-danger" style={{float:'right', marginLeft:'5px'}}><FaTrashCan /></button>
                <button onClick={()=>{                  
                  setExperienceEditCard(card);
                  setExperienceEditCardIndex(index);
                  toggleAddExperience(false);
                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
              </div>
            </div>
          )}
        </div>

        <Button color="success" onClick={toggleAddEducation}>
          <FiPlus /> Add Education
        </Button>
        <AddEducationModal 
          onAddEducation={handleAddEducation}
          toggle={toggleAddEducation}
          isOpen = {showAddEducation}
          editCard = {educationEditCard}
          editCardIndex = {educationEditCardIndex}
          editExisting={(index, card) => {
            let newCards = [...cardsEducation];
            newCards[index] = card;
            setCardsEducation(newCards);
          }}
        />
        {cardsEducation.map((card, index) => 
            <div className="card" style={{ width: "18rem" }} key={index}>
              <div className="card-header">
                <h5 className="card-title">{card.role}</h5>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>Start: {card.startingDate}</p>
                <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>End: {card.endingDate}</p>
                <p className="card-text" style={{ fontWeight: 700 }}>{card.institution}</p>
                <p className="card-text" style={{ fontSize: '15px' }}>{card.specialization}</p>
                <button onClick={()=>{
                  let newCards = [...cardsExperience];
                  newCards.splice(index, 1);
                  setCardsEducation(newCards);                  
                }} className="btn btn-danger" style={{float:'right', marginLeft:'5px'}}><FaTrashCan /></button>
                <button onClick={()=>{                  
                  setEducationEditCard(card);
                  setEducationEditCardIndex(index);
                  toggleAddEducation(false);
                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
              </div>
            </div>
          )}        
      </div>
    </div>
  )
};

export default PortfolioPage2;
