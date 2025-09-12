import React from "react";
import { Container, Button } from "react-bootstrap";
import Particle from "../Particle";
import certifications from "../Certificate/data.js";

function Certificate() {
  return (
    <Container fluid className="cert-section">
      <Particle />

      <h2 className="cert-heading" data-aos="fade-up">
        🎓 My Certifications
      </h2>

      <Container className="cert-inner">
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card"
              data-aos="zoom-in"              // 👈 animation type
              data-aos-delay={index * 150}    // 👈 stagger effect
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                  data-aos="fade-in"
                />
              )}

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-meta">
                <span className="cert-label">Issuer:</span> {cert.issuer}
              </p>
              <p className="cert-meta">
                <span className="cert-label">Date:</span> {cert.date}
              </p>
              <Button
                as="a"
                variant="primary"
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 100} // Button comes after card
              >
                View Certificate
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Certificate;
