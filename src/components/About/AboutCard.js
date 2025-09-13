import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Habib-Ur-Rehman</span> from <span className="purple">Faisalabad, Pakistan.</span>
            <br />
            I am an <span className="purple">IBM Certified Data Science Professional </span>
            with strong expertise in <span className="purple">Python, Data Analysis, Visualization, and Machine Learning.</span>
            <br />
            I am currently pursuing a <span className="purple">BS in Computer Science</span> at 
            <span className="purple"> COMSATS University Islamabad.</span>
            <br />
            <br />
            I help businesses and individuals turn <span className="purple">raw data into actionable insights</span> by:
            <ul className="skills-list">
              <li>Cleaning and preprocessing datasets</li>
              <li>Performing Exploratory Data Analysis (EDA)</li>
              <li>Creating impactful data visualizations</li>
              <li>Building predictive models for decision-making</li>
            </ul>
                  
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every challenge can be solved with the right approach - difficult, but never impossible!"{" "}
          </p>
          <footer className="blockquote-footer">Habib-Ur-Rehman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
