import React from "react"
import { TbEdit } from "react-icons/tb";
import "./buttons.scss";
import { useNavigate } from 'react-router-dom';

const EditBtn = ({ path }) => {
    const navigate = useNavigate();
    return (
        <button className="buttons"
            onClick={() => navigate(path)}>
            <TbEdit /> Edit
        </button>
    )
};

export default EditBtn;
