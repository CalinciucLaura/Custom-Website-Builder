import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddProductModal = ({ onAddProduct, toggle, isOpen, editCard, editCardIndex, editExisting }) => {
    const [product, setProduct] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        if (editCard) {
            setProduct(editCard.product);
            setCategory(editCard.category);
            setDescription(editCard.description);
            setPrice(editCard.price);
            setQuantity(editCard.quantity);
            setPhoto(editCard.photo);
        }
    }, [editCard]);

    const save = () => {
        if (editCardIndex != null) {
            editExisting(editCardIndex, { product });
        } else {
            onAddProduct({ product, category, description, price, quantity, photo });
        }
        toggle();
        setProduct("");
    }


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
        <div>
            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}> Add Product</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="product">
                                Product Name
                            </Label>
                            <Input
                                id="product"
                                value={product}
                                onChange={e => setProduct(e.target.value)}
                                name="product"
                                placeholder="Product Name"
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">
                                Category
                            </Label>
                            <Input
                                id="category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                name="category"
                                placeholder="Category"
                                required={true}
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
                                placeholder="Description"
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">
                                Price
                            </Label>
                            <Input
                                id="price"
                                value={price}
                                type="number"
                                onChange={e => setPrice(e.target.value)}
                                name="price"
                                placeholder="Price"
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="quantity">
                                Quantity
                            </Label>
                            <Input
                                id="quantity"
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
                                name="quantity"
                                type="number"
                                placeholder="Quantity"
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">
                                Image
                            </Label>
                            <Input
                                id="photo"
                                placeholder="Upload a profile photo"
                                name="photo"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
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

export default AddProductModal;
