import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.authorized) {
    return (
      <div className="link-to-form">
        <Link to="/orders">ORDER</Link>
      </div>
    );
  } else {
    return (
      <div className="link-to-AUTH">
        <Link to="/auth">LOGIN</Link>
      </div>
    );
  }
};

export default Button;
