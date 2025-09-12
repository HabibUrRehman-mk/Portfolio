import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description"
            data-aos="fade-up" // 👈 Text fade up
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-right">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Python, Java and SQL. </b>
              </i>
              <br />
              <br />I am currently pursuing a &nbsp;
              <i>
                <b className="purple">
                  BS in Computer Science at COMSATS University Islamabad,{" "}
                </b>
                with interests in Data Science, Machine Learning and{" "}
                <b className="purple">Artificial Intelligence.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              efficient solutions and applications using{" "}
              <b className="purple">Python </b> and
              <i>
                <b className="purple"> its frameworks.</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  Pandas, NumPy, Scikit-learn, TensorFlow, and Matplotlib{" "}
                </b>
              </i>
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            md={12}
            className="home-about-social"
            data-aos="fade-up" // 👈 Social section fades in
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="400">
                <a
                  href="https://www.hackerrank.com/profile/habibazeem658"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="600">
                <a
                  href="https://www.linkedin.com/in/habiburrehman-da/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
export default Home2;
