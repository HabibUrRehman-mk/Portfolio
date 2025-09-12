import React, { useState, useEffect, Suspense, lazy } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/HABIB_UR_REHMAN_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "aos/dist/aos.css";

// ✅ Lazy load react-pdf (better performance)
const { pdfjs } = require("react-pdf");
const Document = lazy(() => import("react-pdf").then(mod => ({ default: mod.Document })));
const Page = lazy(() => import("react-pdf").then(mod => ({ default: mod.Page })));

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  // const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Button
            variant="primary"
            href={pdf}
            download="Habib_Ur_Rehman_CV.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Preview PDF */}
        <Row
          className="resume"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <Suspense fallback={<p style={{ color: "white" }}>📄 Loading PDF...</p>}>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p style={{ color: "white" }}>📄 Loading PDF...</p>}
              error={<p style={{ color: "red" }}>❌ Failed to load PDF</p>}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
            </Document>
          </Suspense>
        </Row>

        {/* Bottom Download Button */}
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Button
            variant="primary"
            href={pdf}
            download="Habib_Ur_Rehman_CV.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
