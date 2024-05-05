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
            <Navbar />

            <Section title="My Profile"></Section>

        </div>
    )
};

export default Profile;
