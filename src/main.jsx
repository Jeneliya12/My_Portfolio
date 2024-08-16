import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./pages/header.jsx";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
