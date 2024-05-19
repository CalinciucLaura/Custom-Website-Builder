import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Section from "./sections/Section"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormGroup, Label, Input, Col, Button, Nav } from 'reactstrap';
import "../pages/portfolio/Portfolio.scss";
import { LuMousePointerClick } from "react-icons/lu";
import AlertModal from "./modals/AlertModal";
import { useRecoilState } from 'recoil';
import { userState } from './user_session_state';

const Profile = () => {
    const [userState, setUserState] = useRecoilState(userState);

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { user_id } = useParams();
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showAlertModalPassword, setShowAlertModalPassword] = useState(false);

    useEffect(() => {
        fetch(`/profile/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setFirstName(data[2])
                    setLastName(data[3])
                    setEmail(data[4])
                }
            })
    }, [user_id]);

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

        const response = await fetch(`/profile`, {
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
        setUserState(data);
        window.localStorage.setItem('user_id', data);
    };

    if (user_id !== 'undefined') {
        return (
            <div className="main-body">
                <Navbar />
                <div className="main">
                    <Section title="My Profile" />
                    <Form>
                        <FormGroup row>
                            <Label for="firstName" sm={2}>First Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="firstName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
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
                        {/* <div className="d-flex flex-direction-row">
                            <button >Delete Account</button>
                            <button className="btn btn-success">Change Password</button>
                            <button className="btn btn-primary">Save Changes</button>
                        </div> */}
                    </Form>
                    <Section title="My Portfolio" text={
                        <button onClick={() => { navigate(`/portfolio/template/${user_id}`) }}><LuMousePointerClick /> Visit Website Portfolio</button>
                    }
                    />

                    <Section title="My Websites" />

                </div>

            </div >
        );
    } else {
        return (
            <div className="main-body">
                <Navbar />
                <Section title="Create an Account" />
                <div className="main">
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
