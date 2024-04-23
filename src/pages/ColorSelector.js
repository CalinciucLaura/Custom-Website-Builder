import React from "react"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './portfolio/portfolioPage2.scss'

const ColorSelector = (props) => {
  return (
    <div className="portfolio-body">
        <Link to="/portfolio/skills">
                <Button>
                    Back
                </Button>
        </Link>
            <div className="portfolioPage2">
                <h1>Pick a color for your Website</h1>
                <div className="color-selector">
                    <div className="color-box" style={{ backgroundColor: '#1abc9c' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#f39c12' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#f368e0' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#ff3f34' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#3498db' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#9b59b6' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#1e272e' }}></div>
                </div>
                <Link to="">
                    <Button style={{ backgroundColor: '#3dace7', border: 'white', float: 'right' }}>
                        Next
                    </Button>
                </Link>
            </div>
      
    </div>
  )
};

export default ColorSelector;
