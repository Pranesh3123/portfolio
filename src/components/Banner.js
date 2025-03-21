import { useEffect,useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header1-img.svg"

export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index,setIndex] = useState(1);
    const toRotate = ["Full Stack Developer"];
    const period =2000;

    useEffect(() => {
        let ticker = setInterval (() => {
            tick();
        },delta);

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if(isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Pranesh"}<br></br><span className="Wrap">{text}</span></h1>
                        <p> I am committed to continuous learning and professional development, leveraging my analytical and
                            technical skills to create innovative solutions. I thrive in dynamic, collaborative environments where I
                            can contribute to success while expanding my expertise.
                        </p>
                        <button  onClick={ () => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}