import React from "react"
import { useNavigate } from 'react-router-dom';

const BackNext = ({ path }) => {
    const navigate = useNavigate();

    return (
        <div className="back-next">
            <button onClick={() => navigate(-1)}>
                Back
            </button>
            <button onClick={() => navigate(path)}>
                Next
            </button>
        </div>
    )
};

export default BackNext;
