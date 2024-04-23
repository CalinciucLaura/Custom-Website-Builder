import React from "react"
import "./portfolioPage2.scss";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbEdit } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './portfolioPage2.scss'
import AddSkillModal from './AddSkillModal';

const PortfolioPage3 = () => {
    const [showCardSkills, setShowCardSkills] = useState(false);
    const [cardsSkills, setCardsSkills] = useState([]);

    const handleAddSkills = (newCard) => {
        setShowCardSkills(true);
        setCardsSkills(prevCards => [...prevCards, newCard]);
    }

    const renderCard = (card, index) => {
        return (
            <div className="card" style={{ width: "18rem" }} key={index}>
                <div className="card-header">
                    <h5 className="card-title">{card.role}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text" style={{ fontWeight: 700 }}>{card.skill}</p>
                    <a href="#" className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</a>
                </div>
            </div>
        )
    }

    return (
        <div className="portfolio-body">
            <Link to="/portfolio/experience_education">
                <Button>
                    Back
                </Button>
            </Link>
            <div className="portfolioPage2">
                <h1>Skills</h1>
                <AddSkillModal onAddSkills={handleAddSkills} />
                <div className="cards">
                    {showCardSkills === true ? <>{cardsSkills.map(renderCard)}</> : null}
                </div>
                <Link to="/portfolio/color">
                    <Button style={{ backgroundColor: '#3dace7', border: 'white', float: 'right' }}>
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default PortfolioPage3;
