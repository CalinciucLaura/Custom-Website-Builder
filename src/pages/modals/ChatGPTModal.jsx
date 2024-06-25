import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ChatGPTModal = (props) => {
    const {
        modal,
        toggle,
        text,
        section
    } = props;

    console.log(props)

    const [prompt, setPrompt] = useState('');
    const web_id = useParams().id;

    const handlePrompt = async () => {

        if (section === 'title') {

            const response = await fetch(`/chatGPT/title/${web_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    text,
                }),
            });
            const data = await response.json();

            window.location.reload();
        }
        else if (section === 'description1') {
            const response = await fetch(`/chatGPT/description1/${web_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    text,
                }),
            });
            const data = await response.json();

            window.location.reload();
        }
        else if (section === 'description2') {

            const response = await fetch(`/chatGPT/description2/${web_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    text,
                }),
            });
            const data = await response.json();

            window.location.reload();
        }
        else if (section === 'quote') {

            const response = await fetch(`/chatGPT/quote/${web_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    text,
                }),
            });
            const data = await response.json();

            window.location.reload();
        }
        else if (section === 'description3') {

            const response = await fetch(`/chatGPT/description3/${web_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    text,
                }),
            });
            const data = await response.json();

            window.location.reload();
        }

    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>ChatGPT</ModalHeader>
                <ModalBody>
                    <input type="text" placeholder="Regenerate" value={prompt} onChange={e => setPrompt(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={
                        handlePrompt}>
                        Regenerate
                    </Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    );
}
export default ChatGPTModal;