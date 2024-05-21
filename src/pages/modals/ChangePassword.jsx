import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './login.scss';
import { useRecoilState } from 'recoil';
import { userState } from '../user_session_state';
import { useNavigate } from 'react-router-dom';

const ChangePassword = (props) => {
    const {
        modal,
        toggle
    } = props;

    const [user_id, setUserState] = useRecoilState(userState);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePassword = async () => {

        const response = await fetch(`/reset_password/${user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password
            }),
        });

        const data = await response.json();
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Reset Password</ModalHeader>
                <ModalBody>
                    <input type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handlePassword}>
                        Reset
                    </Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    )
};

export default ChangePassword;
