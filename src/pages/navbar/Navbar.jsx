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
                <button style={{ backgroundColor: 'transparent', borderRadius: '50%', border: '2px solid #cee73d' }}><FaRegUser style={{ fontSize: '20px', margin: '5px', color: '#cee73d' }} onClick={() => navigate(`/profile/`)} /></button>
            </div>
        </div>
    )
};

export default Navbar;
