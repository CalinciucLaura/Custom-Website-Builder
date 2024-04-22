import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FiPlus } from "react-icons/fi";

const AddEducationModal = (props) => {

  const [modal, setModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");

  const toggle = () => {
    setModal(!modal);
    if (modal === true) {
      setShowCard(true);
      const _cards = [...cards];
      _cards.push({
        startingDate, endingDate, institution, field, degree
      });
      setCards(_cards);
      props.onAddEducation(_cards[_cards.length - 1]);
    }
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <FiPlus /> Add Education
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Add Education</ModalHeader>
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
                    required='true'
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
              <Label for="institudionName">
                Institution
              </Label>
              <Input
                id="institutionName"
                value={institution}
                onChange={e => setInstitution(e.target.value)}
                name="name"
                placeholder="Institution Name"
                required={true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="specialization">
                Specialization
              </Label>
              <Input
                id="specialization"
                name="specialization"
                placeholder="Specialization"
                value={field}
                onChange={e => setField(e.target.value)}
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

export default AddEducationModal;
