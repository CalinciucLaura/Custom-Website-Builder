import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import { Link,useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import './portfolioPage2.scss'
import AddSkillModal from './AddSkillModal';
import { FiPlus } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import {  useNavigate } from 'react-router-dom';

const PortfolioPage3 = () => {
    const { user_id } = useParams();
    const [showCardSkills, setShowCardSkills] = useState(false);
    const [cardsSkills, setCardsSkills] = useState([]);
    const [showAddSkill, setShowAddSkill] = useState(false);
    const [skillEditCard, setSkillEditCard] = useState(null);
    const [skillEditCardIndex, setSkillEditCardIndex] = useState(null);
    const navigate = useNavigate();

    const toggleAddSkill = (force = true) => {
        if(force) {
            setSkillEditCard(null);
        setSkillEditCardIndex(null);
        }
        setShowAddSkill(!showAddSkill);
    }

    const handleAddSkills = (newCard) => {
        setShowCardSkills(true);
        setCardsSkills(prevCards => [...prevCards, newCard]);
        submitSkills(newCard);
    }

    const submitSkills = async (skillsData) => {
        const response = await fetch(`/skills/${user_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(skillsData),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
      }; 

    return (
        <div className="portfolio-body">
                <Button onClick={() => navigate(-1)}>
                    Back
                </Button>
            <div className="portfolioPage2">
                <h1>Skills</h1>
                <br/>
                <br/>
                <Button color="danger" onClick={toggleAddSkill}>
                <FiPlus /> Add Skill
                </Button>
                <br/>
                <AddSkillModal
                    onAddSkill={handleAddSkills}
                    toggle={toggleAddSkill}
                    isOpen={showAddSkill}
                    editCard={skillEditCard}
                    editCardIndex={skillEditCardIndex}
                    editExisting={(index, card) => {
                        let newCards = [...cardsSkills];
                        newCards[index] = card;
                        setCardsSkills(newCards);
                    }}  
                />
                <div className="cards">
                    {cardsSkills.map((card, index) => 
                     <div className="card" style={{ width: "18rem" }} key={index}>
                     <div className="card-header">
                         <h5 className="card-title">{card.role}</h5>
                     </div>
                     <div className="card-body">
                         <p className="card-text" style={{ fontWeight: 700 }}>{card.skill}</p>
                         <button onClick={()=>{
                  let newCards = [...cardsSkills];
                  newCards.splice(index, 1);
                  setCardsSkills(newCards);                  
                }} className="btn btn-danger" style={{float:'right', marginLeft:'5px'}}><FaTrashCan /></button>
                <button onClick={()=>{                  
                  setSkillEditCard(card);
                  setSkillEditCardIndex(index);
                  toggleAddSkill(false);
                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
                     </div>
                 </div>
                )}           
                </div>
                    <Button className='next-btn' onClick={() => navigate(`/portfolio/projects/${user_id}`)}>
                        Next
                    </Button>
            </div>
        </div>
    )
};

export default PortfolioPage3;
