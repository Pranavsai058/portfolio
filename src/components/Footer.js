import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks} from "react-icons/si"; // ✅ LeetCode icon

function Footer() {
  //let date = new Date();
  //let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>By Pranav</h3>
        </Col>
        {/* <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col> */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/pranavsaikapilavai/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.geeksforgeeks.org/profile/pranavsaikt0gb"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://github.com/Pranavsai058"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pranav-sai-kapilavai-510626252/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
