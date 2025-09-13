
import React from "react";
import { Container, Button } from "react-bootstrap";
import Particle from "../Particle";
import certifications from "../Certificate/data.js";

function Certificate() {
  return (
    <Container fluid className="cert-section">
      <Particle />

      <h4 
        className="cert-heading" 
        data-aos="fade-up"
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        🎓 My Certifications
      </h4>

      <Container className="cert-inner">
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              style={{
                height: 'auto',
                maxHeight: '400px',
                minHeight: '150px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                  data-aos="fade-in"
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
              )}

              <h3 
                className="cert-title"
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                  lineHeight: '1.3'
                }}
              >
                {cert.title}
              </h3>
              
              <p 
                className="cert-meta"
                style={{
                  marginBottom: '0.3rem',
                  fontSize: '0.9rem'
                }}
              >
                <span className="cert-label">Issuer:</span> {cert.issuer}
              </p>
              
              <p 
                className="cert-meta"
                style={{
                  marginBottom: '0.3rem',
                  fontSize: '0.9rem'
                }}
              >
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
                data-aos-delay={index * 200 + 100}
                style={{
                  marginTop: 'auto',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem'
                }}
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
