import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNumpy,
  SiJupyter,
  SiScikitlearn,
  SiPycharm,
  SiIntellijidea,
} from "react-icons/si";
import { ImWindows8 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImWindows8 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea />
      </Col>
    </Row>
  );
}

export default Toolstack;
