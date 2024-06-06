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

    const [prompt, setPrompt] = useState('');
    const web_id = useParams().id;
    console.log(web_id);

    const handlePrompt = async () => {

        if (section === 'title') {
            console.log('title')
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
            console.log(data);
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
            console.log(data);
            window.location.reload();
        }
        else if (section === 'description2') {
            console.log('description2')
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
            console.log(data);
            window.location.reload();
        }
        else if (section === 'quote') {
            console.log('quote')
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
            console.log(data);
            window.location.reload();
        }
        else if (section === 'description3') {
            console.log('description3')
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
            console.log(data);
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