import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="row aligh-items-left">
                    <Col xs={12} md={6} xl={7}>
                        <h2 class="comp-name">SIDA CONSTRUCTION AND PROJECT MANAGEMENT</h2>
                        <h1 class="slogan">THE ULTIMATE <br />​SYNERGY OF <br />​ENGINE​ERS</h1>
                    </Col>
                </Row>
                <a href="#contact-form"><button class="getInTouch">GET IN TOUCH</button></a>
            </Container>
        </section>
    )
}