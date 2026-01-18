import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranav Sai Kapilavai, </span>a final-year B.Tech CSE student 
            at <span className="purple"> IIIT Nagpur.</span>
            <br />
            <br />
            
            I have gained hands-on experience in building scalable applications using <span className="purple"> MERN Stack </span>
            and working with cloud tools and actively practice problem-solving on <span className="purple"> LeetCode </span> 
            and GeeksforGeeks, strengthening core concepts.
            <br />
            <br />
            Seeking opportunities as a <span className="purple"> Software Development Engineer / Full-Stack Developer </span>
              to contribute to impactful projects and drive innovative solutions.
            <br />
            <br />
            Along with coding skill I have other interests like,  
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building solutions, one line at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Pranav Sai Kapilavai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
