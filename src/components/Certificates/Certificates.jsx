import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard"; // create a card component if needed
import certificateImg1 from "../../Assets/certificate1.png"; // your certificate image
import certificateImg2 from "../../Assets/certificate2.png";
import certificateImg3 from "../../Assets/certificate3.png"; 
import certificateImg4 from "../../Assets/certificate4.png"; 
import certificateImg5 from "../../Assets/certificate5.png";

function Certificates() {
  return (
    // <Container fluid className="certificates-section">
    <Container fluid className="certificates-section mt-5 pt-5">

      <Container>
        <h1 className="project-heading">My Certificates</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg1}
              //title="Web Development Course"
              //description="Completed a hands-on Web Development course covering HTML, CSS, JavaScript, and responsive design."
              link=""
            />
          </Col>
          
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg2}
              //title="JavaScript Course"
              //description="Completed a hands-on JavaScript course covering core concepts and DOM manipulation."
              link=""
            />
          </Col>


          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg3}
              //title="Git and GitHub Course"
              //description="Completed a comprehensive course on Git and GitHub for version control and collaboration."
              link=""
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg4}
              //title="ReactJS Course"
              //description="Completed a hands-on ReactJS course covering components and modern frontend development practices."
              link=""
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg5}
              //title="SQL Course"
              //description="Completed an in-depth SQL course covering real-world database problem-solving."
              link=""
            />
          </Col>
          

          {/* Add more certificates here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
