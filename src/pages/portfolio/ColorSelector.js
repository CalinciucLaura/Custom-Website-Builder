import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Portfolio.scss';

const ColorSelector = () => {
  const colors = ['#1abc9c', '#f39c12', '#f368e0', '#ff3f34', '#3498db', '#9b59b6', '#1e272e'];
  const { user_id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  const handleColorSelector = (color, index) => {
    setSelectedColor(index);
  }

  const submitColor = async (color) => {
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
  }

  return (
    <div className="portfolio-body">
        <Button onClick={() => navigate(-1)}>
          Back
        </Button>
      <div className="portfolioPage2">
        <h1>Pick a color for your Website</h1>
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
          <Button style={{ backgroundColor: '#3dace7', border: 'white', float: 'right' }} onClick={submitColor}>
            Next
          </Button>
      </div>
    </div>
  )
};

export default ColorSelector;