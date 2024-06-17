import React, { useState } from "react"
import "../MainPage.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Col, Button, Nav } from 'reactstrap';
import Navbar from "../navbar/Navbar";
import AlertModal from "../modals/AlertModal";
import { useRecoilValue } from 'recoil';
import { userState } from '../user_session_state';
import AddProductModal from "./AddProductModal";
import { FiPlus } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import { FaTrashCan } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom'
import BackNext from '../buttons/BackNext';
AOS.init();


const Shop = (props) => {
    const [user_id] = useRecoilValue(userState);
    const [showCardProducts, setShowCardProducts] = useState(false);
    const [cardsProducts, setCardsProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [productEditCard, setProductEditCard] = useState(null);
    const [productEditCardIndex, setProductEditCardIndex] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`/createShop/${user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                description,
                category
            }),
        });
        navigate(`/shop/products/`);
    };

    return (
        <div>
            <div className="portfolio-body" style={{ backgroundColor: '#1f1f1f' }}>
                <Navbar />
                <div className="portfolio" >
                    <h1>1. Describe Your <span>Business</span></h1>
                    <br />
                    <br />
                    {/* <AlertModal
                        modal={showAlertModal}
                        toggle={() => setShowAlertModal(false)}
                        message="Please fill in all the required fields"
                        isOpen={showAlertModal}
                    /> */}

                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label
                                for="name"
                                sm={2}
                            >
                                Name <span style={{ color: 'red' }}>*</span>
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Website Name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Email <span style={{ color: 'red' }}>*</span>
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
                                Phone <span style={{ color: 'red' }}>*</span>
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
                                for="description"
                                sm={2}
                            >
                                Description <span style={{ color: 'red' }}>*</span>
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    type="text"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <br />
                        <br />

                        <h1>2. What do you <span>sell?</span></h1>
                        <br />
                        <br />
                        <FormGroup row>
                            <Label
                                for="Category"
                                sm={2}
                            >
                                Category <span style={{ color: 'red' }}>*</span>
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="category"
                                    name="category"
                                    placeholder="Category"
                                    type="text"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <br />
                        <br />
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
        </div>
    )
};

export default Shop;
