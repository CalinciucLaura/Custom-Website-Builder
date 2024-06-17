import React, { useState } from "react"
import "../MainPage.scss";
import { useNavigate } from 'react-router-dom';
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
import BackNext from '../buttons/BackNext';
AOS.init();


const Products = (props) => {
    const [user_id] = useRecoilValue(userState);
    const [showCardProducts, setShowCardProducts] = useState(false);
    const [cardsProducts, setCardsProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [productEditCard, setProductEditCard] = useState(null);
    const [productEditCardIndex, setProductEditCardIndex] = useState(null);

    const toggleAddProduct = (force = true) => {
        if (force) {
            setProductEditCard(null);
            setProductEditCardIndex(null);
        }
        setShowAddProduct(!showAddProduct);
    }

    const handleAddProduct = (newCard) => {
        setShowCardProducts(true);
        setCardsProducts(prevCards => [...prevCards, newCard]);
        submitProducts(newCard);
    }

    const submitProducts = async (productData) => {
        const response = await fetch(`/products/${user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (response.ok) {
            console.log("Product added successfully");
        }

        const data = await response.json();
    }


    return (
        <div className="portfolio-body">
            <Navbar />
            <BackNext path={'/shop/images/'} />
            <div className="portfolioPage2" data-aos="fade-left">
                <h1>3. Add <span>products</span></h1>
                <br />
                <br />
                <Button color="warning" onClick={toggleAddProduct} style={{ float: 'left' }}>
                    <FiPlus /> Add Product
                </Button>
                <AddProductModal
                    onAddProduct={handleAddProduct}
                    toggle={toggleAddProduct}
                    isOpen={showAddProduct}
                    editCard={productEditCard}
                    editCardIndex={productEditCardIndex}
                    editExisting={(index, card) => {
                        let newCards = [...cardsProducts];
                        newCards[index] = card;
                        setCardsProducts(newCards);
                    }}
                />
                <div className="cards">
                    {cardsProducts.map((card, index) =>
                        <div className="card" style={{ width: "18rem" }} key={index}>
                            <div className="card-header">
                                <h5 className="card-title">{card.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ fontWeight: 700 }}>{card.category}</p>
                                <p className="card-text">{card.price}</p>
                                <button onClick={() => {
                                    let newCards = [...cardsProducts];
                                    newCards.splice(index, 1);
                                    setCardsProducts(newCards);
                                }} className="btn btn-danger" style={{ float: 'right', marginLeft: '5px' }}><FaTrashCan /></button>
                                <button onClick={() => {
                                    setProductEditCard(card);
                                    setProductEditCardIndex(index);
                                    toggleAddProduct(false);
                                }} className="btn btn-primary" style={{ float: 'right' }}><TbEdit /> Edit</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div >

    )
};

export default Products;
