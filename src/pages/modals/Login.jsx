import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './login.scss';
import { useRecoilState } from 'recoil';
import { userState } from '../user_session_state';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const {
        modal,
        toggle
    } = props;

    const [user_id, setUserState] = useRecoilState(userState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async () => {

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        const data = await response.json();

        if (data !== 'Invalid credentials') {
            console.log(data);
            setUserState(data);
            window.localStorage.setItem('user_id', data);

            window.location.href = '/';
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                    <div>
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <br />
                        <br />
                        <span>Don't have an account?
                            <a onClick={() => navigate('/profile')}> <u>Register </u></a>
                        </span>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleLogin}>
                        Login
                    </Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    )
};

export default Login;
