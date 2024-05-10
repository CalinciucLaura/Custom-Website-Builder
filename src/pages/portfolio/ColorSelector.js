import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Portfolio.scss';
import ThreeDotsWave from '../Bars/ThreeDotsWave';
import Navbar from '../navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AlertModal from "../modals/AlertModal";

AOS.init();
const ColorSelector = () => {
  const colors = ['#1abc9c', '#f39c12', '#f368e0', '#ff3f34', '#3498db', '#9b59b6', '#1e272e'];
  const { user_id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showAlertModal, setShowAlertModal] = useState(false);

  const handleColorSelector = (color, index) => {
    setSelectedColor(index);
  }

  const submitColor = async (color) => {
    if(selectedColor === null) {
      setShowAlertModal(true);
      return;
    }
    setLoading(true);
    const response = await fetch(`/portfolio/color/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        color: colors[selectedColor]
      }),
    });
    const data = await response.json();
    setTimeout(() => {
      setLoading(false);
      navigate(`/portfolio/template/${user_id}`);
    }, 5000);

  }

  return (
    <div className="portfolio-body">
      <Navbar />
      {loading ? (<ThreeDotsWave /> ): ( 
        <>        
        <div className="portfolioPage2" data-aos = "fade-left">
          <>
          <Button  onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button className="next-btn" onClick={submitColor}>
            Next
          </Button>
          </>
        
        <h1>Pick a color for your <span>Website</span></h1>
        <br/>
        <AlertModal 
          modal = {showAlertModal}
          isOpen={showAlertModal}
          toggle={() => setShowAlertModal(false)}
          message="Please select a color"
        />
      
        <div className="color-selector">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className={`color-box ${selectedColor === index ? 'selected' : ''}`} 
              style={{ backgroundColor: color }} 
              onClick={() => handleColorSelector(color, index)}
            ></div>
          ))}
        </div>
             
      </div>
        </>
      )}

    </div>
  )
};

export default ColorSelector;