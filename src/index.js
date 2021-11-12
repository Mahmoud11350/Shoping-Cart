import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";

ReactDom.render(
  <Router>
    <App />
  </Router>,

  document.querySelector("#root")
);
