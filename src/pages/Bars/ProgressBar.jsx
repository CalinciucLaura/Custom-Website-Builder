import React, { useState, useEffect } from 'react';
import './styles.css';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 1800); // Increase by 1% every 600ms to reach 100% in 60 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="outer-circle">
                <div className="inner-circle">
                    <span id="number">{progress}%</span>
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
            <br />
            <p>Please wait</p>
        </div>
    );
};

export default ProgressBar;