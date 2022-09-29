import React from "react";
import ReactDOM from "react-dom/client";

import "../src/sass/index.scss";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
