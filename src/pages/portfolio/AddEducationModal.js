import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const AddEducationModal = ({onAddEducation, toggle, isOpen, editCard, editCardIndex, editExisting}) => {
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [specialization, setSpecialization] = useState("");

  useEffect(()=>{
    if(editCard){
      setStartingDate(editCard.startingDate);
      setEndingDate(editCard.endingDate);
      setInstitution(editCard.institution);
      setSpecialization(editCard.specialization);
    }
  }, [editCard]);

  const save = () => {
    if(editCardIndex!=null) {
      editExisting(editCardIndex, { startingDate, endingDate, institution, specialization });
    } else {
      onAddEducation({ startingDate, endingDate, institution, specialization });
    }
    toggle();
    setStartingDate("");
    setEndingDate("");
    setInstitution("");
    setSpecialization("");
  }
  
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} >
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
                value={specialization}
                onChange={e => setSpecialization(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={save}>
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
