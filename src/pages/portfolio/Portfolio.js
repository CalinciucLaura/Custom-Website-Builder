import React, { useEffect, useState } from "react"
import "../MainPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, FormText, Col, Button } from 'reactstrap';
import "./Portfolio.scss";

const Portfolio = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if(!firstName || !lastName || !email || !phone || !address || !description || !photo) {
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
        photo
      }),
    });
    const data = await response.json();
    console.log(data);
    navigate('/portfolio/experience_education');
  };

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
              First Name
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
              Last Name
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
              Email
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
              Phone
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
              Address
            </Label>
            <Col sm={10}>
              <Input
                id="address"
                name="address"
                placeholder="Address"
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
              Short Description about yourself
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
              Upload a profile photo
            </Label>
            <Col sm={10}>
              <Input
                id="photo"
                name="photo"
                type="file"
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                accept="image/*"
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
