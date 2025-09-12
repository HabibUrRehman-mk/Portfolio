import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// 👇 Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className="home-header"
              data-aos="fade-right"  // 👈 slide in from left
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Habib-Ur-Rehman</strong>
              </h1>

              <div
                style={{ padding: 50, textAlign: "left" }}
                data-aos="fade-up" // 👈 fade-up effect
              >
                <Type />
              </div>
            </Col>

            <Col
              md={4}
              className="myAvtar"
              data-aos="zoom-in"  // 👈 zoom effect
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <div data-aos="fade-up" data-aos-duration="1200">
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
