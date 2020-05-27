import React from "react";
import image from "./Bounce-Bar-Preloader-1.gif";

const Spinner = () => (
  <img
    src={image}
    style={{ width: "400px", margin: "auto", display: "block" }}
    alt="spinner"
  />
);

export default Spinner;
