import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Section from "./sections/Section"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormGroup, Label, Input, Col, Button, Nav } from 'reactstrap';
import "../pages/portfolio/Portfolio.scss";
import { LuMousePointerClick } from "react-icons/lu";
import AlertModal from "./modals/AlertModal";
import { useRecoilState } from 'recoil';
import { userState } from './user_session_state';
import "./MainPage.scss";
import { FaTrashCan } from "react-icons/fa6";
import ChangePassword from "./modals/ChangePassword"

const Profile = () => {
    const [user_id, setUserState] = useRecoilState(userState);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idPortfolio, setIdPortfolio] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showAlertModalPassword, setShowAlertModalPassword] = useState(false);
    const [showAlertUserExists, setShowAlertUserExists] = useState(false);
    const [showAlertDeletePortfolio, setShowAlertDeletePortfolio] = useState(false);
    const [showAlertEmptyInputs, setShowAlertEmptyInputs] = useState(false);
    const [showAlertDeleteAccount, setShowAlertDeleteAccount] = useState(false);
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            setShowAlertModal(true);
            return;
        }

        if (password !== confirmPassword) {
            setShowAlertModalPassword(true);
            return;
        }

        const response = await fetch(`/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
        });
        const data = await response.json();
        if (data === "User already exists") {
            setShowAlertUserExists(true);
            return;
        }

        setUserState(data);
        window.localStorage.setItem('user_id', data);
    };

    useEffect(() => {
        if (user_id) {
            fetch(`/user/${user_id}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setFirstName(data[1]);
                        setLastName(data[2]);
                        setEmail(data[3]);
                    }
                    else {
                        console.log("No user found")
                    }
                }
                );
        }
    }, [user_id]);

    const handleSaveChanges = async () => {

        if (!firstName || !lastName || !email) {
            setShowAlertEmptyInputs(true);
            return;
        }

        const response = await fetch(`/user/${user_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email
            }),
        });
        const data = await response.json();
        if (data === "User updated") {
            setShowAlertModal(true);
        }
    }

    const handleDeleteAccount = async () => {
        const response = await fetch(`/user/${user_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data === "User deleted") {
            setShowAlertModal(true);

        }
        console.log(data);
        setShowAlertDeleteAccount(true);
        setUserState('');
        window.localStorage.removeItem('user_id');
        navigate('/');
    };

    useEffect(() => {
        fetch(`/portfolio/${user_id}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIdPortfolio(data[0]);
                }
                else {
                    console.log("No portfolio found")
                }
            });
    }, []);


    const handleDeletePortfolio = async () => {
        setShowAlertDeletePortfolio(true);
        const response = await fetch(`/portfolio/${user_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };

    const handleResetPassword = () => {
        setShowResetPasswordModal(!showResetPasswordModal);

    }

    if (user_id) {
        return (
            <div className="portfolio-body">
                <Navbar logoutBtn={true} />
                <AlertModal message="Portfolio Deleted" modal={showAlertDeletePortfolio} toggle={() => setShowAlertDeletePortfolio(false)} />
                <AlertModal message="Please fill all the fields" modal={showAlertEmptyInputs} toggle={() => setShowAlertEmptyInputs(false)} />
                <AlertModal message="Account Deleted" modal={showAlertDeleteAccount} toggle={() => setShowAlertDeleteAccount(false)} />
                <AlertModal message="Profile Updated" modal={showAlertModal} toggle={() => setShowAlertModal(false)} />
                <ChangePassword modal={showResetPasswordModal} toggle={() => setShowResetPasswordModal(!showResetPasswordModal)} />

                <Section title="My Profile" />
                <div className="portfolio">
                    <Form>
                        <FormGroup row>
                            <Label for="firstName" sm={2}>First Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="firstName" id="firstName" value={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={2}>Last Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="Email" value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <Button onClick={handleDeleteAccount}>Delete Account</Button>
                        <Button onClick={handleResetPassword}>Change Password</Button>
                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </Form>
                </div>

                {idPortfolio ?
                    <Section title="My Portfolio"
                        text={[
                            <Button key="visitPortfolio" className="btn btn-success" onClick={() => { navigate(`/portfolio/template/`) }} style={{ marginRight: '20px' }}><LuMousePointerClick /> Visit Website Portfolio</Button>,
                            <Button key="deletePortfolio" className="btn btn-danger" onClick={handleDeletePortfolio}><FaTrashCan /> Delete Website Portfolio</Button>
                        ]
                        }
                    />
                    :
                    <Section title="My Portfolio"
                        text="You do not have a portfolio yet. Click the button below to create one."
                        sectionBtn={<Button className="btn btn-success" onClick={() => { navigate(`/portfolio`) }}><LuMousePointerClick /> Create Website Portfolio</Button>}
                    />
                }
                <br />
                <Section title="My Websites" />

            </div >
        );
    } else {
        return (
            <div className="portfolio-body">
                <Navbar loginBtn={true} />
                <Section title="Create an Account" />
                <br />
                <div className="portfolio">
                    <AlertModal
                        modal={showAlertModal}
                        toggle={() => setShowAlertModal(false)}
                        message="Please fill in all the required fields"
                        isOpen={showAlertModal}
                    />
                    <AlertModal
                        modal={showAlertModalPassword}
                        toggle={() => setShowAlertModalPassword(false)}
                        message="Passwords do not match"
                        isOpen={showAlertModalPassword}
                    />
                    <AlertModal
                        modal={showAlertUserExists}
                        toggle={() => setShowAlertUserExists(false)}
                        message="User already exists"
                        isOpen={showAlertUserExists}
                    />
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label for="firstName" sm={2}>First Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={2}>Last Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="confirmPassword" sm={2}>Confirm Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <Button>Sign Up</Button>
                    </Form>
                </div>
            </div>
        );
    }
};

export default Profile;
