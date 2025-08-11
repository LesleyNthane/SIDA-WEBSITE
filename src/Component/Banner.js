import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <div className="banner-bg">
             <TrackVisibility>
             {({ isVisible }) =>
             <Container className="banner-container">
                <Row className="row aligh-items-left">  
                    <Col  xs={12} md={6} xl={7}>
                        <h2 class="comp-name">SIDA CONSTRUCTION AND PROJECT MANAGEMENT</h2>
                        <h1 className="slogan">THE ULTIMATE <br />​SYNERGY OF <br />​ENGINE​ERS</h1>
                    </Col>
                </Row>

                <div className="row stats-panel">
                    <div className="stats-panel1 stats-panel-sub col-lg-3 col-md-3 col-sm-20 col-xs-20">
                        <div className="">
                            <Award className="h-8 w-8 text-construction-orange mr-2" />
                            <span className="text-3xl font-bold">30+</span>
                        </div>
                        <p className="text-white/80">Successful Tenders</p>
                    </div>
                    
                    <div className="stats-panel2 stats-panel-sub col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="">
                            <Calendar className="h-8 w-8 text-construction-orange mr-2" />
                            <span className="text-3xl font-bold">15+</span>
                        </div>
                        <p className="text-white/80">Years Experience</p>
                    </div>
                    
                    <div className="stats-panel3 stats-panel-sub col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="">
                            <Users className="h-8 w-8 text-construction-orange mr-2" />
                            <span className="text-3xl font-bold">15+</span>
                        </div>
                        <p className="text-white/80">Expert Team Members</p>
                    </div>
                </div>


                <a href="#contact-form"><button class="getInTouch">GET IN TOUCH</button></a>
            </Container>}
            </TrackVisibility>
            </div>
        </section>
    )
}