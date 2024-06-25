import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import BackNext from "../buttons/BackNext";
import { useRecoilValue } from "recoil";
import { userState } from "../user_session_state";
import { FormGroup, Form, Label, Input } from "reactstrap";

const AddImages = () => {
    const [user_id] = useRecoilValue(userState);
    const [images, setImages] = useState(Array(10).fill("")); // Initialize an array of 10 empty strings

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/shop/images/${user_id}`, {
            method: 'POST',
            body: JSON.stringify({ images }),
        });

        if (response.ok) {
            console.log("Images added successfully");
        }
        else {
            console.error("Failed to add images");
        }
    };

    function toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function handleFileChange(event, index) {
        const file = event.target.files[0];

        toBase64(file).then((base64) => {
            const newImages = [...images];
            newImages[index] = base64;
            setImages(newImages);
        });
    }

    return (
        <div className="portfolio-body" style={{ backgroundColor: '#1f1f1f' }}>
            <Navbar editBtn={undefined} publishBtn={undefined} pathEdit={undefined} pathPublish={undefined} loginBtn={undefined} logoutBtn={undefined} />
            <BackNext local={`http://localhost:3030/${user_id}`} path={undefined} />
            <div className="portfolio" >
                <h1>4. Add images to your <span>Website</span></h1>
                <br />
                <br />
                <Form onSubmit={handleSubmit}>
                    {images.map((_, index) => (
                        <FormGroup key={index}>
                            <Label for={`image${index + 1}`}>Image {index + 1}</Label>
                            <Input type="file" name={`image${index + 1}`} id={`image${index + 1}`} onChange={(event) => handleFileChange(event, index)} />
                        </FormGroup>
                    ))}
                </Form>
            </div>
        </div>
    );
};

export default AddImages;