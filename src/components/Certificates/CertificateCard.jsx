import React from "react";
import { Card, Button } from "react-bootstrap";

function CertificateCard({ imgPath, title, description, link }) {
  return (
    <Card className="certificate-card-view">
      <Card.Img variant="top" src={imgPath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">View</Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
