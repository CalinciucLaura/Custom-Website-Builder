import React from "react"
import "./navbar.scss";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import EditBtn from "../buttons/EditBtn";
import PublishBtn from "../buttons/PublishBtn";
import Menu from "./Menu";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ editBtn, publishBtn, pathEdit, pathPublish }) => {
    const navigate = useNavigate();

    return (
        <div className="top">
            <Menu />
            <div className="right-side">
                {editBtn == true ? <EditBtn path={pathEdit} /> : null}
                {publishBtn == true ? <PublishBtn path={pathPublish} /> : null}
                <a style={{ backgroundColor: 'transparent' }}>
                    <FaRegUser style={{ fontSize: '20px', margin: '7px', color: '#cee73d', cursor: 'pointer' }} onClick={() => navigate(`/profile/`)} /></a>
            </div>
        </div>
    )
};

export default Navbar;
