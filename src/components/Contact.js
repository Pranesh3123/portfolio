import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"; // Update with actual path

export const Contact = () => {
    const [formDetails, setFormDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState({ message: "", success: false });
    const [buttonText, setButtonText] = useState("Send Message");

    const onFormUpdate = (field, value) => {
        setFormDetails({ ...formDetails, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        // EmailJS service details
        const serviceID = "service_hlsrt1m";
        const templateID = "template_w6jdgxc";
        const publicKey = "AE7vRXzxi8v3Njjt1";

        const templateParams = {
            user_name: `${formDetails.firstName} ${formDetails.lastName}`,
            user_email: formDetails.email,
            user_phone: formDetails.phone,
            message: formDetails.message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                (response) => {
                    setStatus({ message: "Message sent successfully!", success: true });
                    setFormDetails({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                },
                (error) => {
                    setStatus({ message: "Failed to send message. Please try again.", success: false });
                }
            )
            .finally(() => setButtonText("Send Message"));
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} required></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                            {/* {status.message && (
                                <p className={status.success ? "text-success" : "text-danger"}>
                                    {status.message}
                                </p>
                            )} */}
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
