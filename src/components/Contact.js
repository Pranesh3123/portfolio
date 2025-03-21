import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    // ✅ Update form field values
    const onFormUpdate = (field, value) => {
        setFormDetails({ ...formDetails, [field]: value });
    };

    const API_URL = "https://portfolio-obgm.onrender.com";
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        try {
            let response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDetails),  // ✅ Ensure JSON is properly formatted
            });
    
            let result = await response.json(); // ✅ Parse response as JSON
            setStatus({ success: response.ok, message: result.message });
    
            if (response.ok) {
                setFormDetails(formInitialDetails);
                setButtonText('Sent ✅');
            } else {
                setButtonText('Send');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            // setStatus({ success: false, message: "Network error, please try again." });
            setButtonText('Send');
        }
    };
    
    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            {status.message && (
                                <p className={status.success ? "text-success" : "text-danger"}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
