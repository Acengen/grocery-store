import React from "react";
import { Link } from "react-router-dom";

const LinkToLogin = () => (
  <div className="text-center">
    <button className="link-to-login">
      <Link to="/auth">Go to login page</Link>
    </button>
  </div>
);

export default LinkToLogin;
