import React, { useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress(prev => prev < 100 ? prev + 10 : 100);
    };

    const decreaseProgress = () => {
        setProgress(prev => prev > 0 ? prev - 10 : 0);
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', backgroundColor: '#f3f3f3', height: '20px', position: 'relative' }}>
                    <div style={{ width: `${progress}%`, backgroundColor: 'blue', height: '100%' }} />
                    <div style={{ position: 'absolute', width: '100%', textAlign: 'center', fontWeight: 'bold' }}>{progress}%</div>
                </div>
            </div>
            <button onClick={increaseProgress}>Back</button>
            <button onClick={decreaseProgress}>Next</button>
        </div>
    );
};

export default ProgressBar;