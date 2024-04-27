import React, { useState } from "react"
import "../MainPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import "./Portfolio.scss";

const Portfolio = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if(!firstName || !lastName || !email || !phone || !address || !description || !role) {
      alert('Please fill all the fields');
      return;
    }

    event.preventDefault();
  
    const response = await fetch(`/portfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        address,
        description,
        photo,
        linkedin, 
        github, 
        role
      }),
    });
    const user_id = await response.json();
    navigate(`/portfolio/experience_education/${user_id}`);
  };

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    toBase64(file).then((base64) => {
      setPhoto(base64);
    });
  }

  return (
    <div className="portfolio-body">
      <Link to="/">
        <Button>
          Back
        </Button>
      </Link>
      <div className="portfolio">
        <h1>Complete your <span>Resume</span></h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label
              for="name"
              sm={2}
            >
              First Name <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="lastName"
              sm={2}
            >
              Last Name <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleEmail"
              sm={2}
            >
              Email <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="phone"
              sm={2}
            >
              Phone <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="address"
              sm={2}
            >
              Country <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="address"
                name="address"
                placeholder="Country"
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Short Description about yourself <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleFile"
              sm={2}
            >
              Upload a profile photo <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              LinkedIn
            </Label>
            <Col sm={10}>
              <Input
                id="linkedin"
                name="text"
                type="text"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Github
            </Label>
            <Col sm={10}>
              <Input
                id="github"
                name="text"
                type="text"
                value={github}
                onChange={e => setGithub(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              What is your role? <span style={{color:'red'}}>*</span>
            </Label>
            <Col sm={10}>
              <Input
                id="role"
                name="text"
                type="text"
                value={role}
                onChange={e => setRole(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup
            check
            row
          >
            <Col
              sm={{
                offset: 2,
                size: 10
              }}
            >
                <Button>
                  Next
                </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
    )
};

export default Portfolio;
