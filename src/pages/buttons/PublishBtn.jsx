import React from "react"
import "./buttons.scss";
import { MdOutlineFileUpload } from "react-icons/md";

const PublishBtn = ({ path }) => {
    return (
        <button className="buttons">
            <MdOutlineFileUpload /> Publish
        </button>
    )
};

export default PublishBtn;
