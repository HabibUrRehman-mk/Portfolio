import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/talharehman23542/"
              target="_blank"
              rel="noopener noreferrer"
              style={{  color: "#0a66c2", textDecoration: "none" }}
            >
              Talha Rehman
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HUR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/HabibUrRehman-mk"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/habibazeem658"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiHackerrank />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/habiburrehman-da/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/923136652015"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=habiburrehman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

