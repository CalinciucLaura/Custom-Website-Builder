import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddProject = ({onAddProject, toggle, isOpen, editCard, editCardIndex, editExisting}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  useEffect(()=>{
    if(editCard){
      setTitle(editCard.title);
      setDescription(editCard.description); 
      setLink(editCard.link);
    }
  }, [editCard]);

  const save = () => {
    if(editCardIndex!=null) {
      editExisting(editCardIndex, { title, description, link });
    } else {
      onAddProject({ title, description, link });
    }
    toggle();
    setTitle("");
    setDescription("");
    setLink("");
  }
  
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} >
        <ModalHeader toggle={toggle}> Add Project</ModalHeader>
        <ModalBody>
          <Form >
            <FormGroup>
              <Label for="title">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                name="title"
                placeholder="Name of the project"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                name="description"
                placeholder="Tell what is the project about"
              />
            </FormGroup>
            <FormGroup>
              <Label for="link">
                Source Code Link
              </Label>
              <Input
                id="link"
                value={link}
                onChange={e => setLink(e.target.value)}
                name="link"
                placeholder="Source code link"
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

export default AddProject;
