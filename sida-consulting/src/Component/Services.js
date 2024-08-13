import { Col, Row } from "react-bootstrap"
import $ from 'jquery';
import { useState } from "react";

export const Service = () => {

    $(document).ready(function() {
        $(".panel").click(function() {
            $(".panel-body").toggleClass("read");
        });
    });


    const [visiblePanels, setVisiblePanels] = useState({});
    const togglePanel = (panelIndex) => {
        setVisiblePanels((prevVisiblePanels) => ({
            ...prevVisiblePanels,
            [panelIndex]: !prevVisiblePanels[panelIndex],
        }));
    };


    return (
        <section className="services" id="services">
            <Row className="align-item-center">
                <Col xs={12} md={12} xl={12}>
                    <h4 class="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
                    <h1 class="title-services">Our Services</h1>
                    <div className="row" id="services-panels">
                        {/** Panel 1 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(1)}>PROJECT MANAGEMENT ​AND CO-ORDINATION</div>
                            {visiblePanels[1] && ( <div class="panel-body">
                                <ul>
                                    <li>Projects Facilitation</li>
                                    <li>Project Control</li>
                                    <li>Report Writing</li>
                                    <li>Institutional Capacity ​Building Projects</li>
                                    <li>Construction Monitoring ​and Supervision</li>
                                </ul>
                            </div>)}
                        </div>
                    
                        {/** Panel 2 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(2)}>ENGINEERING SERVICES</div>
                            {visiblePanels[2] && ( <div class="panel-body">
                                <ul>
                                    <li>Civil Engineering</li>
                                    <li>Structural Engineering</li>
                                    <li>Electrical Engineering</li>
                                    <li>Mechanical Engineering</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 3 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(3)}>GEOTECHNICAL ​ENGINEERING</div>
                            {visiblePanels[3] && ( <div class="panel-body">
                                <ul>
                                    <li>Geotechnical Site ​Investigations</li>
                                    <li>Geological Moping</li>
                                    <li>Geo-hydrology</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 4 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(4)}>TOWN AND REGIONAL ​PLANNING</div>
                            {visiblePanels[4] && ( <div class="panel-body">
                                <ul>
                                    <li>Master and Local Planning</li>
                                    <li>Urban Planning and ​Township Establishment</li>
                                    <li>Development Feasibility ​Studies</li>
                                    <li>Township Planning</li>
                                    <li>Detailed Township Layout ​Design</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 5 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(5)}>BENEFICIARY ADMINISTRATION ​AND VERIFICATION</div>
                            {visiblePanels[5] && (<div class="panel-body">
                                <ul>
                                    <li>Beneficiary Registrations ​and Approvals</li>
                                    <li>Beneficiary Audit</li>
                                </ul>
                            </div>)}
                        </div>

                        {/** Panel 6 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(6)}>QUANTITY SURVEYING</div>
                            {visiblePanels[6] && ( <div class="panel-body">
                                <ul>
                                    <li>Preparations of Bill or ​Schedule of Quantities</li>
                                    <li>Preparations of Payments ​Certificates</li>
                                    <li>Payments Certifications</li>
                                    <li>Site Measurements</li>
                                </ul>
                            </div>)}
                        </div>
                        
                        {/** Panel 7 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(7)}>LAND SURVEYING</div>
                            {visiblePanels[7] && ( <div class="panel-body">
                                <ul>
                                    <li>Cadastral Survey</li>
                                    <li>Topographical Survey</li>
                                    <li>Engineering Survey</li>
                                    <li>Urban/Rural Settlements ​Survey</li>
                                    <li>Surveyor General Plans ​and Approvals</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 8 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(8)}>ENVIROMENTAL ​MANAGEMENT</div>
                            {visiblePanels[8] && ( <div class="panel-body">
                                <ul>
                                    <li>Environmental Impact ​Assessments</li>
                                    <li>Environmental Audits</li>
                                    <li>Environmental Screening ​and Scooping</li>
                                    <li>Environmental Monitoring</li>
                                    <li>Health and Safety ​management and ​Monitoring</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 9 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="panel-heading" onClick={() => togglePanel(9)}>Township Registrations</div>
                            {visiblePanels[9] && ( <div class="panel-body">
                                <ul>
                                    <li>Township Registrations</li>
                                    <li>Title deeds Registrations</li>
                                    <li>Conveyance Certificates</li>
                                    <li>Transfer of Erf’s</li>
                                </ul>
                            </div>)}
                        </div>
                        {/** Panel 10 */}
                        <div class="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12 align-item-center">
                            <div class="panel-heading" onClick={() => togglePanel(10)}>ARCHITECTURAL AND URBAN DESIGNS</div>
                            {visiblePanels[10] && (<div class="panel-body">
                                <ul>
                                    <li>Building Plans Designs and ​Approvals</li>
                                    <li>Conceptual Designs</li>
                                    <li>Landscaping</li>
                                    <li>Mix Developments Designs</li>
                                </ul>
                            </div>)}
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </section>
    )
}