import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodapp from "../../Assets/Projects/foodapp.png";
import chatapp from "../../Assets/Projects/chatapp.jpg";
import collegeapp from "../../Assets/Projects/collegeapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Prime-Ticket"
              description="PrimeTicket is a centralized railway reservation system that automates real-time seat searches, fare calculations, and ticket bookings for the Indian Railways network."
              ghLink="https://github.com/Pranavsai058/Prime-Ticket"
              demoLink="https://prime-ticket.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegeapp}
              isBlog={false}
              title="Prime Ticket Dashboard"
              description="Admin panel for PrimeTicket website"
              ghLink="https://github.com/Pranavsai058"
              demoLink="https://prime-ticket.vercel.app/admin-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="VeloxChat"
              description="A full-stack messaging platform enabling instant communication with online/offline status, theme toggle, and seamless chat experience."
              ghLink="https://github.com/Pranavsai058/VeloxChat"
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
