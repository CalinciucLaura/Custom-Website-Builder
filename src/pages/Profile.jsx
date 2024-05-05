import React from "react"
import "./MainPage.scss"
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import { VscAccount } from "react-icons/vsc"
import Section from "./sections/Section"

const Profile = (props) => {
    const navigate = useNavigate();
    return (
        <div className="main-body">
            <div className="top">
                <Navbar />
                <button style={{ backgroundColor: 'transparent', borderRadius: '50%', padding: '5px' }}><VscAccount style={{ fontSize: '35px', margin: '5px', color: '#cee73d' }} onClick={() => navigate(`/profile/`)} /></button>
            </div>
            <Section title="My Profile"></Section>

        </div>
    )
};

export default Profile;
