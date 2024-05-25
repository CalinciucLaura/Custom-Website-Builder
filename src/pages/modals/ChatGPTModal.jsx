import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ChatGPTModal = (props) => {
    const {
        modal,
        toggle,
        message
    } = props;

    const [prompt, setPrompt] = useState('');
    const web_id = useParams().id;
    console.log(web_id);

    const handlePrompt = async () => {
        console.log(prompt);
        console.log(message);
        const response = await fetch(`/chatGPT/title/${web_id}`, {
            method: 'POST',        
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                message
            }),
        });

        const data = await response.json();
        console.log(data);
        window.location.reload();
    }

    return (
        <div>
          <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>ChatGPT</ModalHeader>
                <ModalBody>
                    <input type="text" placeholder="Regenerate" value={prompt} onChange={e => setPrompt(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handlePrompt}>
                        Regenerate
                    </Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    );
}
export default ChatGPTModal;