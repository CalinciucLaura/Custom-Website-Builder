import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const AddExperienceModal = ({onAddExperience, toggle, isOpen, editCard, editCardIndex, editExisting}) => {
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");

  useEffect(()=>{
    console.log(editCard);
    if(editCard){
      setStartingDate(editCard.startingDate);
      setEndingDate(editCard.endingDate);
      setCompany(editCard.company);
      setCity(editCard.city);
      setRole(editCard.role);
    }
  }, [editCard]);

  const save = () => {     
    if(editCardIndex!=null) {
      editExisting(editCardIndex, { startingDate, endingDate, company, city, role });
    } else {
      onAddExperience({ startingDate, endingDate, company, city, role });
    }    
    toggle();
    setStartingDate("");
    setEndingDate("");
    setCompany("");
    setCity("");
    setRole("");    
  }

  return (
    <div>      
      <Modal isOpen={isOpen} toggle={toggle}>
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
                style={{color:'black'}}
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
                style={{color:'black'}}
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

export default AddExperienceModal;
