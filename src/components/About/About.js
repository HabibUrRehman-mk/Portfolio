import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const educationData = [
    {
      id: 1,
      degree: "BS in Computer Science",
      institution: "COMSATS University Islamabad",
      duration: "2023 – 2027",
      description: "CGPA: 3.97",
    },
    {
      id: 2,
      degree: "Intermediate, Pre-Engineering",
      institution: "Al Falah College",
      duration: "2021 – 2023",
      description: "Grade: A",
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "Al Falah College",
      duration: "2019 – 2021",
      description: "Grade: A+",
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="zoom-in"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* ================== Education Section ================== */}
        <h1 className="project-heading" data-aos="fade-up">
          🎓 My <strong className="purple">Education</strong>
        </h1>
        <div className="edu-grid">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="edu-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>
        {/* ======================================================== */}

        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading" data-aos="fade-up">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <div data-aos="fade-up">
          <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
