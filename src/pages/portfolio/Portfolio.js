import React from "react"
import "../MainPage.scss";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, FormText, Col, Button } from 'reactstrap';
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div className="portfolio-body">
    <div className="portfolio">
       <h1>Complete your <span>Resume</span></h1>
  <Form>
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
      <Link to="/portfolio/about">
      <Button>
        Next
      </Button>
      </Link>
    </Col>
  </FormGroup>
</Form>
</div>
</div>
    // <div className="main">
    //   <h1>Complete your <span>Resume</span></h1>
    //   <div className="blocks">
    //   <div className="input-block-left">
    //     <label>First name</label>
    //     <input type="text" placeholder="First Name" required/>
    //     <label>Last name</label>
    //     <input type="text" placeholder="Last Name" required />
    //     <label>Email</label>
    //     <input type="text" placeholder="Email" required/>
    //   </div>
    //   <div className="input-block-right">
    //     <label>Phone</label>
    //     <input type="text" placeholder="Phone" />
    //     <label>Address</label>
    //     <input type="text" placeholder="Address" />
    //     <label>Upload a profile photo</label>
    //     <UploadImage />
    //   </div> 
    //   </div>
    //   {/* <textarea type="text" placeholder="Write a short description about yourself" /> */}
    //   <Link to="/portfolio/about">
    //   <button>Next</button>
    //   </Link>
    // </div>
    
  )
};

export default Portfolio;
