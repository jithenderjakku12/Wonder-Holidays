import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Home.css";
import "./styles/Packages.css"
import "./styles/About.css"
import "./styles/Blog.css"
import "./styles/Gallery.css"
import "./styles/Gallery.css"
import "./styles/Contact.css"





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);