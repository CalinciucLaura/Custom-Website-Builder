import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';

const Contact = ({ email, phone, color }) => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_r7utm4o",
                "template_jpp5y74",
                formRef.current,
                "idOjAySFY6_NPHA4j"
            )
            .then(
                (result) => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <div className="contact">
            <h1>Let’s Work <span style={{ color: color }}>Together</span></h1>
            <div className="textContainer">
                <div className="item">
                    <h2>{email}</h2>
                    <span>{phone}</span>
                </div>
            </div>
            <div className="formContainer">
                <form onSubmit={sendEmail} className="">
                    <label>FULL NAME<span>*</span></label>
                    <input type="text" required placeholder="Your Full name" name="name" />
                    <label>EMAIL<span>*</span></label>
                    <input type="email" required placeholder="Your email address" name="email" />
                    <label>MESSAGE<span>*</span></label>
                    <textarea rows={2} required placeholder="Write your message here ..." name="message" />
                    <button style={{ backgroundColor: color }}>SEND MESSAGE</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </div >
    );
};

export default Contact;