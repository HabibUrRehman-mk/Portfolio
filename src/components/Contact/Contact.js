import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particle from "../Particle";
import toast from "react-hot-toast";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "09222d9f-1d9b-4c4c-88ff-6770bfec28c1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} className="contact-form-wrapper">
            {/* Heading */}
            <h1
              className="project-heading"
              data-aos="fade-up"
            >
              Get in <strong className="purple">Touch</strong>
            </h1>

            {/* Description */}
            <p
              className="form-desc"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Have a question, project idea, or just want to say hello? Fill out
              the form below or <br /> reach me directly on WhatsApp.
            </p>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="contact-form"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="form-group" data-aos="fade-right" data-aos-delay="600">
                <p className="form-label">Your Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-left" data-aos-delay="800">
                <p className="form-label">Your Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="1000">
                <p className="form-label">Message</p>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Enter your message"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="form-button"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col
            md={8}
            className="home-about-social"
            data-aos="fade-up"
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="200">
                <a
                  href="https://github.com/HabibUrRehman-mk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="400">
                <a
                  href="https://www.hackerrank.com/profile/habibazeem658"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="600">
                <a
                  href="https://www.linkedin.com/in/habiburrehman-da/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="800">
                <a
                  href="https://wa.me/923136652015"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="1000">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mail.habiburrehman@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;