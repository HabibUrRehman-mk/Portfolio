import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DataNexus from "../../Assets/Projects/DataNexus.png";
import Iris from "../../Assets/Projects/Iris.png";
import ChurnAnalysis from "../../Assets/Projects/ChurnAnalysis.png";
import FatPredictor from "../../Assets/Projects/fatpredictor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p
          style={{ color: "white" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <ProjectCard
              imgPath={DataNexus}
              isBlog={false}
              title="DataNexus"
              description="Designed and implemented a result-based data analysis tool for COMSATS University Islamabad using Python, Matplotlib, Seaborn and Numpy. The system processes semester result to generate insights such as student performance trends, GPA distribution, and batch-wise comparisons."
              ghLink="https://github.com/HabibUrRehman-mk/DataNexus"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <ProjectCard
              imgPath={Iris}
              isBlog={false}
              title="Iris"
              description="A machine learning project that classifies Iris flowers into different species (Setosa, Versicolor, Virginica) based on petal and sepal measurements. It uses supervised learning algorithms and achieves high accuracy."
              ghLink="https://github.com/HabibUrRehman-mk/iris_knn_classifier"
              demoLink="https://knniris-habiburrehman.streamlit.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <ProjectCard
              imgPath={ChurnAnalysis}
              isBlog={false}
              title="Churn Analysis"
              description="A data science project that analyzes customer behavior to predict churn. It uses machine learning models and visualization techniques to identify key factors affecting retention and helps businesses make data-driven decisions."
              ghLink="https://github.com/HabibUrRehman-mk/Data_Science_Learning/tree/main/Churn%20Analysis%20project"
            
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <ProjectCard
              imgPath={FatPredictor}
              isBlog={false}
              title="Fat Predictor"
              description="A machine learning project that predicts body fat percentage based on health indicators such as age, weight, height, and body measurements. It helps in health monitoring and fitness planning with quick predictions."
              ghLink="https://github.com/HabibUrRehman-mk/Body_Fat_predictor"
              demoLink="https://bodyfatpredictor.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

