import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextProv from "./ContextAPI/ContextApi";

ReactDOM.render(
  <ContextProv>
    <App />
  </ContextProv>,
  document.getElementById("root")
);
