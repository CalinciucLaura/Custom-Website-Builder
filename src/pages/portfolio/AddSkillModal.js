import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';

const AddSkillModal= ({onAddSkill, toggle, isOpen, editCard, editCardIndex, editExisting}) => {
  const [skill, setSkill] = useState("");

  useEffect(()=>{
    if(editCard){
      setSkill(editCard.skill);
    }
  }, [editCard]);

  const save = () => {
    if(editCardIndex!=null) {
      editExisting(editCardIndex, { skill });
    } else {
      onAddSkill({ skill });
    }
    toggle();
    setSkill("");
  }

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} >
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

export default AddSkillModal;
