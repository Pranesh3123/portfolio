import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/download-icon.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="footer-content">
                            <img src={logo} alt="Logo" className="footer-logo"/>
                            <p>© 2025 All Rights Reserved</p>
                        </div>
                    </Col>
                    <Col sm={6} className="text-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pranesh-j-728683234/" target="_blank" rel="noopener noreferrer" aria-label="Social Link 1"><img src={navIcon1} alt="Social 1"/></a>
                            <a href="https://github.com/Pranesh3123" target="_blank" rel="noopener noreferrer" aria-label="Social Link 2"><img src={navIcon2} alt="Social 2"/></a>
                            <a href="https://drive.google.com/file/d/1oU4c7m-Bi0p44MOnT7kOe_e_rvPs0SdR/view?usp=drive_link"target="_blank" rel="noopener noreferrer"  aria-label="Social Link 3"><img src={navIcon3} alt="Social 3"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
