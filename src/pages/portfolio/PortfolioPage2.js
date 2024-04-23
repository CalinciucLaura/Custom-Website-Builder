import React from "react"
import "./portfolioPage2.scss";
import { useState } from "react";
import AddExperienceModal from "./AddExperienceModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import AddEducationModal from "./AddEducationModal";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FiPlus } from "react-icons/fi";

const PortfolioPage2 = (props) => {
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
  }

  const handleAddEducation = (newCard) => {
    setShowCardEducation(true);
    setCardsEducation(prevCards => [...prevCards, newCard]);
  }

  const renderCardEducation = (card, index) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={index}>
        <div className="card-header">
          <h5 className="card-title">{card.role}</h5>
        </div>
        <div className="card-body">
          <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>Start: {card.startingDate}</p>
          <p className="card-text" style={{ fontSize: "12px", fontWeight: 700, color: 'green' }}>End: {card.endingDate}</p>
          <p className="card-text" style={{ fontWeight: 700 }}>{card.company}</p>
          <p className="card-text" style={{ fontSize: '15px' }}>{card.city}</p>
          <a href="#" className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</a>
        </div>
      </div>
    )
  }
  return (
    <div className="portfolio-body">
      <Link to="/portfolio">
        <Button>
          Back
        </Button>
      </Link>
      <div className="portfolioPage2">
        <h1>Experience <span> & Education</span></h1>
        <Button color="danger" onClick={toggleAddExperience}>
          <FiPlus /> Add Experience
        </Button>
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
                  setExperienceEditCard(card);
                  setExperienceEditCardIndex(index);
                  toggleAddExperience(false);
                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
              </div>
            </div>
          )}
        </div>
        <AddEducationModal onAddEducation={handleAddEducation} />
        <div className="cards">
          {cardsEducation.map(renderCardEducation)}
        </div>
        <Link to="/portfolio/skills">
          <Button style={{ backgroundColor: '#3dace7', border: 'white', float: 'right' }}>
            Next
          </Button>
        </Link>
      </div>
    </div>
  )
};

export default PortfolioPage2;
