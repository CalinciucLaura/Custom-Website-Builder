import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CiCircleAlert } from "react-icons/ci";

const AlertModal = (props) => {
    const {
        modal,
        toggle,
        message
    } = props;

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody className='d-flex flex-column align-items-center'>
                    <CiCircleAlert style={{ fontSize: '50px', color: 'white' }} />
                    {message}
                </ModalBody>
            </Modal>
        </div>
    )
};

export default AlertModal;
