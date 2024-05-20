import React, {useState} from "react"
import "./navbar.scss";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import EditBtn from "../buttons/EditBtn";
import PublishBtn from "../buttons/PublishBtn";
import Menu from "./Menu";
import Login from "../modals/Login";
import { FaRegUser } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Navbar = ({ editBtn, publishBtn, pathEdit, pathPublish , loginBtn}) => {
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    return (
        <div className="top">
            <Menu />
            <div className="right-side">
                <Login modal={showLogin} toggle={() => setShowLogin(!showLogin)} />
                {editBtn == true ? <EditBtn path={pathEdit} /> : null}
                {publishBtn == true ? <PublishBtn path={pathPublish} /> : null}
                {loginBtn == true ? <button className="login-btn" onClick={handleLogin}>Login</button> :  null} 


                <a style={{ backgroundColor: 'transparent' }}>
                    <FaRegUser style={{ fontSize: '20px', margin: '7px', color: '#cee73d', cursor: 'pointer' }} onClick={() => navigate(`/profile/`)} /></a>
            </div>
        </div>
    )
};

export default Navbar;
