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
import { MdLogout } from "react-icons/md";
import AlertModal from "../modals/AlertModal";
import { useRecoilState } from 'recoil';
import { userState } from '../user_session_state';

const Navbar = ({ editBtn, publishBtn, pathEdit, pathPublish , loginBtn, logoutBtn}) => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [user_id, setUserState] = useRecoilState(userState);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    const handleLogout = () => {
        setShowLogout(!showLogout);
        setUserState('');
        window.localStorage.removeItem('user_id');
        navigate(`/`);

    }

    return (
        <div className="top">
            <Menu />
            <div className="right-side">
                <Login modal={showLogin} toggle={() => setShowLogin(!showLogin)} />
                <AlertModal modal={showLogout} toggle={() => setShowLogout(!showLogout)} message = {"Disconnected"}/>
                {editBtn == true ? <EditBtn path={pathEdit} /> : null}
                {publishBtn == true ? <PublishBtn path={pathPublish} /> : null}
                {loginBtn == true ? <button className="login-btn" onClick={handleLogin}>Login</button> :  null} 
                {logoutBtn == true ? <button className="login-btn" onClick={handleLogout}><MdLogout /></button> :  null}

                <a style={{ backgroundColor: 'transparent' }}>
                    <FaRegUser style={{ fontSize: '20px', margin: '7px', color: '#cee73d', cursor: 'pointer' }} onClick={() => navigate(`/profile/`)} /></a>
            </div>
        </div>
    )
};

export default Navbar;
