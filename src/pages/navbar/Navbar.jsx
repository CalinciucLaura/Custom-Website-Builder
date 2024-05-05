import React from "react"
import "./navbar.scss";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import EditBtn from "../buttons/EditBtn";
import PublishBtn from "../buttons/PublishBtn";
import Menu from "./Menu";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ editBtn, publishBtn }) => {
    const navigate = useNavigate();

    return (
        <div className="top">
            <Menu />
            <div className="right-side">
                {editBtn == true ? <EditBtn /> : null}
                {publishBtn == true ? <PublishBtn /> : null}
                <a style={{ backgroundColor: 'transparent' }}>
                    <FaRegUser style={{ fontSize: '20px', margin: '5px', color: '#cee73d', cursor: 'pointer' }} onClick={() => navigate(`/profile/`)} /></a>
            </div>
        </div>
    )
};

export default Navbar;
