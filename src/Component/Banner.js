import { Col, Container, Row } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    return (
        <section className="banner" id="home">
             <TrackVisibility>
             {({ isVisible }) =>
             <Container className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <Row className="row aligh-items-left">
                   
                        
                            <Col  xs={12} md={6} xl={7}>
                                <h2 class="comp-name">SIDA CONSTRUCTION AND PROJECT MANAGEMENT</h2>
                                <h1 className="slogan">THE ULTIMATE <br />​SYNERGY OF <br />​ENGINE​ERS</h1>
                            </Col>
                    
                </Row>
                <a href="#contact-form"><button class="getInTouch">GET IN TOUCH</button></a>
            </Container>}
            </TrackVisibility>
        </section>
    )
}