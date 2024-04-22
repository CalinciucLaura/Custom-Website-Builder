import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FiPlus } from "react-icons/fi";

const AddExperienceModal = (props) => {

  const [modal, setModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cards, setCards] = useState([]);

  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");

  const toggle = () => {
    setModal(!modal);
    if (modal === true) {
      setShowCard(true);
      const _cards = [...cards];
      _cards.push({ startingDate, endingDate, company, city, role });
      setCards(_cards);
      props.onAddExperience(_cards[_cards.length - 1]);
    }
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <FiPlus /> Add Experience
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Experience</ModalHeader>
        <ModalBody>
          <Form >
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="startingDate">
                    Starting Date
                  </Label>
                  <Input
                    id="startingDate"
                    value={startingDate}
                    name="date"
                    placeholder="date placeholder"
                    onChange={e => setStartingDate(e.target.value)}
                    type="date"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="endingDate">
                    Ending Date
                  </Label>
                  <Input
                    id="endingDate"
                    value={endingDate}
                    onChange={e => setEndingDate(e.target.value)}
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col >
            </Row>
            <FormGroup>
              <Label for="companyName">
                Company Name
              </Label>
              <Input
                id="companyName"
                value={company}
                onChange={e => setCompany(e.target.value)}
                name="name"
                placeholder="Company Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="role">
                Position
              </Label>
              <Input
                type="role" required
                name="text"
                id="role"
                value={role}
                onChange={e => setRole(e.target.value)}

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

export default AddExperienceModal;
