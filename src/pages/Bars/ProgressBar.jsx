import React from 'react';
import './styles.css';

const ProgressBar = () => {
    return (
        <div className="wrapper">
            <div className="outer-cercle">
                <div className="inner-cercle">
                    <span id="number">80%</span>
                </div>
            </div>
            <svg className="svg" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="svgColor">
                        <stop offset="0%" stopColor="#ff5f6d"></stop>
                        <stop offset="100%" stopColor="#ffc371"></stop>
                    </linearGradient>
                </defs>
                <circle className="svg-circle" cx="100" cy="100" r="85"></circle>
            </svg>
        </div>
    );
};

export default ProgressBar;