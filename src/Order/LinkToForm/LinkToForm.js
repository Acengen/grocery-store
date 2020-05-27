import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextObject } from "../../ContextAPI/ContextApi";

const Button = () => {
  const context = useContext(ContextObject);
  if (context.authorized) {
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
