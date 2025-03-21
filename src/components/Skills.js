import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from '../assets/img/color-sharp.png';
import python from '../assets/img/python.gif'
import java from '../assets/img/java.gif'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import javaScript from '../assets/img/javascript.png'
import react from '../assets/img/react.gif'
import bootstrap from '../assets/img/bootstrap.png'
import django from '../assets/img/django.png'
import mysql from '../assets/img/mysql.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Proficient in full-stack development, with a strong foundation in frontend UI design, backend logic, and database management. 
                                Skilled in building dynamic and responsive web applications using HTML, CSS, JavaScript, and React, ensuring seamless user experiences. 
                                Experienced in developing secure and scalable backend solutions with Django and SQL, efficiently handling data management and server-side logic. 
                                Adept at utilizing Bootstrap to create visually appealing and mobile-friendly interfaces, enhancing the overall performance and accessibility of web applications.</p>
                                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} removeArrowOnDeviceType={["tablet", "mobile"]} className="skills-slider">
                                <div className="item">
                                    <img src={python} alt="Web Development" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={django} alt="Web Development" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Web Development" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Web Development" />
                                    <h5>react</h5>
                                </div>
                                <div className="item">
                                    <img src={javaScript} alt="Web Development" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="Web Development" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Web Development" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Web Development" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Web Development" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    );
};
