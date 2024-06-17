import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import BackNext from "../buttons/BackNext";
import { useRecoilValue } from "recoil";
import { userState } from "../user_session_state";
import { FormGroup, Form, Label, Input } from "reactstrap";

const AddImages = () => {
    const [user_id] = useRecoilValue(userState);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);
    const [image7, setImage7] = useState(null);
    const [image8, setImage8] = useState(null);
    const [image9, setImage9] = useState(null);
    const [image10, setImage10] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].forEach((image, index) => {
            if (image) formData.append(`image${index + 1}`, image);
        });

        const response = await fetch(`http://localhost:3030/${user_id}/images`, {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log("Images added successfully");
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

    function handleFileChange(event, image_state) {
        const file = event.target.files[0];
        toBase64(file).then((base64) => {
            const setImage = window[`setImage${image_state.charAt(5).toUpperCase()}${image_state.slice(6)}`];
            if (setImage) {
                setImage(base64);
            }
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
                    {[...Array(10)].map((_, index) => (
                        <FormGroup key={index}>
                            <Label for={`image${index + 1}`}>Image {index + 1}</Label>
                            <Input type="file" name={`image${index + 1}`} id={`image${index + 1}`} onChange={(event) => handleFileChange(event, `image${index + 1}`)} />
                        </FormGroup>
                    ))}
                </Form>
            </div>
        </div>
    );
};

export default AddImages;