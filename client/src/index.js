import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
//root.render(<React.StrictMode><App /></React.StrictMode>);
