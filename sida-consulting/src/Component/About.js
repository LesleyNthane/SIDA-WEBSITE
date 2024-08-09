import { Col, Row } from "react-bootstrap";
import compServices from "../Assets/img/SIDA-SERVICES.png";

export const About = () => {
    return (
        <section className="about" id="about">
            <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h4 class="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
                    <h1 class="title-about">About Us</h1>
                    <div className="row" id="container1">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="conp-picture">
                            <img src={compServices} alt="company's services picture" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="aboutContent">
                            <p><b>SIDA Consulting and Project Management</b> is a wholly black owned company ​established in 
                                2012, our company comprises itself of highly skilled, professional and ​qualified 
                                consultants and engineers.
                            </p>
                            <p>
                                <b>SIDA Consulting and Project Management</b> was founded by two very experienced ​individuals 
                                who have worked in very reputable companies and have also been ​involved in some major 
                                civil projects in South Africa over the years, related to Civil ​Engineering and 
                                Construction. During these difficult economic times we have to ​always prepare ourselves 
                                in being one step ahead, we have to work at our optimum ​level to accomplish success and 
                                achieve valuable results. Re-skilling, Up-skilling and ​training individuals who will 
                                diversify their offerings, is the way to go. Employees who ​understand the values and 
                                culture Engineering, Consulting and Project Management ​in order to become invaluable 
                                resources not only in South Africa but to the world at ​large.
                            </p>
                            <p>
                                Innovation requires the injection of new blood with fresh ideas and vision driven 
                                ​mentality. It is therefore critical to attract, employ and retain the best there is in 
                                the ​market. It is therefore important to rely on experts to handle this important task; 
                                this ​is where <b>SIDA Consulting and Project Management</b> become instrumental.
                            </p>
                            <a href="#contact-form"><button class="getInTouch">Get In Touch</button></a>
                        </div>
                    </div>
                    <div className="row" id="container2">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 vision">
                            <h5 class="vision-heading">Vision</h5>
                            <p class="vision-p1">
                                We aim to partner with related Government Organizations, Private Sectors ​and Corporate 
                                Companies, to assist them in achieving their goals for service ​delivery.
                            </p>
                            <p class="vision-p2">
                                We deliver on time according to the expected level of service delivery and in ​the process; we also aim to 
                                transfer skills to upcoming graduates / aspiring ​individuals within our spectrum.
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mission">
                            <h5 class="mission-heading">Mission</h5>
                            <p class="mission-p1">
                                We want to appoint specialised professionals for various projects and in every project; we ​will 
                                then assign graduates and individuals who aspire to be professionals / experts in this ​field of 
                                work.
                            </p>
                            <p class="mission-p2">
                                SIDA aims to use their expertise to also create employment of great quality, which will serve ​as 
                                preservation in the field of Engineering, Artisanship and Project Management on a large ​scale through 
                                innovation and cost effective solutions of skills / socio economic ​development.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}