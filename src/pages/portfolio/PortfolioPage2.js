import React from "react"
import "./portfolioPage2.scss";
import { useState } from "react";
import AddExperienceModal from "./AddExperienceModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import AddEducationModal from "./AddEducationModal";

const PortfolioPage2 = (props) => {
  const [showCardEducation, setShowCardEducation] = useState(false);
  const [showCardExperience, setShowCardExperience] = useState(false);
  const [cardsEducation, setCardsEducation] = useState([]);
  const [cardsExperience, setCardsExperience] = useState([]);

  const handleAddExperience = (newCard) => {
    setShowCardExperience(true);
    setCardsExperience(prevCards => [...prevCards, newCard]);
  }

  const handleAddEducation = (newCard) => {
    setShowCardEducation(true);
    setCardsEducation(prevCards => [...prevCards, newCard]);
  }

  const renderCard = (card, index) => {
    return (
      <div className="card" style={{width: "18rem"}} key={index}>
        <div className="card-header">
       <h5 className="card-title">{card.role}</h5>
        </div> 
      <div className="card-body">       
        <p className="card-text" style={{fontSize:"12px",fontWeight: 700, color: 'green'}}>Start: {card.startingDate}</p>
        <p className="card-text" style={{fontSize:"12px",fontWeight: 700, color: 'green'}}>End: {card.endingDate}</p>
        <p className="card-text" style={{fontWeight: 700}}>{card.company}</p>
        <p className="card-text" style={{fontSize:'15px'}}>{card.city}</p>
       
        <a href="#" className="btn btn-primary" style={{float:'right'}}><TbEdit /> Edit</a>
      </div>
    </div>  
    )
  }

  const renderCardEducation = (card, index) => {
    return (
      <div className="card" style={{width: "18rem"}} key={index}>
        <div className="card-header">
       <h5 className="card-title">{card.role}</h5>
        </div> 
      <div className="card-body">       
        <p className="card-text" style={{fontSize:"12px",fontWeight: 700, color: 'green'}}>Start: {card.startingDate}</p>
        <p className="card-text" style={{fontSize:"12px",fontWeight: 700, color: 'green'}}>End: {card.endingDate}</p>
        <p className="card-text" style={{fontWeight: 700}}>{card.company}</p>
        <p className="card-text" style={{fontSize:'15px'}}>{card.city}</p>
       
        <a href="#" className="btn btn-primary" style={{float:'right'}}><TbEdit /> Edit</a>
      </div>
    </div>  
    )
  }

  return (
    <div className="portfolio-body">
    
    <div className="portfolioPage2">
    <h1>Experience <span> & Education</span></h1>
    <AddExperienceModal onAddExperience={handleAddExperience}/>    

  <div className="cards">
  {/* { showCard == true ?  <>
    {cards.map((card, index) => <React.Fragment key={index}>{(renderCard)}</React.Fragment>)}
  </> : null} */}
  { showCardExperience === true ?  <>{cardsExperience.map(renderCard)}</> : null}
  </div>

  <AddEducationModal onAddEducation={handleAddEducation}/>   

  <div className="cards">
  {/* { showCard == true ?  <>
    {cards.map((card, index) => <React.Fragment key={index}>{(renderCard)}</React.Fragment>)}
  </> : null} */}
  { showCardEducation == true ?  <>{cardsEducation.map(renderCardEducation)}</> : null}
  </div>
    </div>
    </div>
  )
};

export default PortfolioPage2;
