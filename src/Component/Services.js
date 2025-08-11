import { Col, Row } from "react-bootstrap";
import { useState } from "react";

export const Service = () => {
  const [visiblePanels, setVisiblePanels] = useState({});

  const togglePanel = (panelIndex) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panelIndex]: !prev[panelIndex],
    }));
  };

  const servicesData = [
    {
      title: "PROJECT MANAGEMENT ​AND CO-ORDINATION",
      items: [
        "Projects Facilitation",
        "Project Control",
        "Report Writing",
        "Institutional Capacity ​Building Projects",
        "Construction Monitoring ​and Supervision",
      ],
    },
    {
      title: "ENGINEERING SERVICES",
      items: [
        "Civil Engineering",
        "Structural Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
      ],
    },
    {
      title: "GEOTECHNICAL ​ENGINEERING",
      items: [
        "Geotechnical Site ​Investigations",
        "Geological Moping",
        "Geo-hydrology",
      ],
    },
    {
      title: "TOWN AND REGIONAL ​PLANNING",
      items: [
        "Master and Local Planning",
        "Urban Planning and ​Township Establishment",
        "Development Feasibility ​Studies",
        "Township Planning",
        "Detailed Township Layout ​Design",
      ],
    },
    {
      title: "BENEFICIARY ADMINISTRATION ​AND VERIFICATION",
      items: [
        "Beneficiary Registrations ​and Approvals",
        "Beneficiary Audit",
      ],
    },
    {
      title: "QUANTITY SURVEYING",
      items: [
        "Preparations of Bill or ​Schedule of Quantities",
        "Preparations of Payments ​Certificates",
        "Payments Certifications",
        "Site Measurements",
      ],
    },
    {
      title: "LAND SURVEYING",
      items: [
        "Cadastral Survey",
        "Topographical Survey",
        "Engineering Survey",
        "Urban/Rural Settlements ​Survey",
        "Surveyor General Plans ​and Approvals",
      ],
    },
    {
      title: "ENVIROMENTAL ​MANAGEMENT",
      items: [
        "Environmental Impact ​Assessments",
        "Environmental Audits",
        "Environmental Screening ​and Scooping",
        "Environmental Monitoring",
        "Health and Safety ​management and ​Monitoring",
      ],
    },
    {
      title: "Township Registrations",
      items: [
        "Township Registrations",
        "Title deeds Registrations",
        "Conveyance Certificates",
        "Transfer of Erf’s",
      ],
    },
    {
      title: "ARCHITECTURAL AND URBAN DESIGNS",
      items: [
        "Building Plans Designs and ​Approvals",
        "Conceptual Designs",
        "Landscaping",
        "Mix Developments Designs",
      ],
    },
  ];

  return (
    <section className="services" id="services">
      <Row className="align-item-center">
        <Col xs={12}>
          <h4 className="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
          <h1 className="title-services">Our Services</h1>
          <p className="services-description">
            With over 25 years of excellence in construction and tender
            management, we have established ourselves as a trusted partner
            for complex projects across multiple sectors.
          </p>
          <div className="row" id="services-panels">
            <p>Click Title to view more info</p>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="panel panel-default col-lg-4 col-md-6 col-sm-12 col-xs-12"
              >
                <div
                  className="panel-heading"
                  onClick={() => togglePanel(index)}
                  style={{ cursor: "pointer" }}
                >
                  {service.title}
                </div>
                {visiblePanels[index] && (
                  <div className="panel-body">
                    <ul>
                      {service.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="ServiceRequestSection">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our expert team to discuss your construction needs and discover 
                how we can deliver exceptional results for your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                    <button className="ServiceRequestButton">
                        Request Consultation
                    </button>
                </a>
                </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
