import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ Import AOS properly
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize AOS
AOS.init({
  duration: 1000, // animation duration
  once: true,     // animate only once per element
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
