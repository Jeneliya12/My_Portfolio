// index.js
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/My_Portfolio">
      {" "}
      {/* Add basename for subpath */}
      <Home />
    </Router>
  </StrictMode>
);
