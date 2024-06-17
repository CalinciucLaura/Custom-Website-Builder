import React from "react"
import { useNavigate } from 'react-router-dom';

const BackNext = ({ path, local }) => {
    const navigate = useNavigate();

    return (
        <div className="back-next">
            <button onClick={() => navigate(-1)}>
                Back
            </button>
            <button onClick={() =>
                (path) ? navigate(path) : window.location.href = local
            }>
                Next
            </button>
        </div >
    )
};

export default BackNext;
