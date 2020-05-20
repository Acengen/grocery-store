import React from "react";
import image from "./Bounce-Bar-Preloader-1.gif";

const Spinner = () => (
  <img
    src={image}
    style={{ width: "200px", margin: "auto", display: "block" }}
  />
);

export default Spinner;
