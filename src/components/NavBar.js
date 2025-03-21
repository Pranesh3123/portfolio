import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/download-icon.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="home" smooth={true} duration={500} className="navbar-link">Home</Link>
                        <Link to="skills" smooth={true} duration={500} className="navbar-link">Skills</Link>
                        <Link to="projects" smooth={true} duration={500} className="navbar-link">Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="navbar-link">Contact</Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pranesh-j-728683234/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="social1" />
                            </a>
                            <a href="https://github.com/Pranesh3123" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="social2" />
                            </a>
                            <a href="https://drive.google.com/file/d/1oU4c7m-Bi0p44MOnT7kOe_e_rvPs0SdR/view?usp=drive_link"target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Download Resume" />
                            </a>
                        </div>
                        <Link to="contact" smooth={true} duration={500} className="navbar-link"><button className="vvd"><span>Let's connect</span></button></Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
