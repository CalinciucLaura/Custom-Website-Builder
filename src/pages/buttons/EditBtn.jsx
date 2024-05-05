import React from "react"
import { TbEdit } from "react-icons/tb";
import "./buttons.scss";

const EditBtn = (props) => {
    return (
        <button className="buttons">
            <TbEdit /> Edit
        </button>
    )
};

export default EditBtn;
