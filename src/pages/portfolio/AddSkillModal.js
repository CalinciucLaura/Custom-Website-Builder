import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FiPlus } from "react-icons/fi";

const AddSkillModal= (props) => {
  const [modal, setModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [skill, setSkill] = useState("");
  
  const toggle = () => {
    setModal(!modal);
    if (modal === true) {
      setShowCard(true);
      const _cards = [...cards];
      _cards.push({
        skill
      });
      setCards(_cards);
      props.onAddSkills(_cards[_cards.length - 1]);
    }
  }

  return (
    <div className='portfolio-body'>
      <Button color="danger" onClick={toggle}>
        <FiPlus /> Add Skill
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Add Skill</ModalHeader>
        <ModalBody>
          <Form >
            <FormGroup>
              <Label for="skill">
                Skill
              </Label>
              <Input
                id="skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
                name="skill"
                placeholder="Add a skill"
                required={true}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default AddSkillModal;
